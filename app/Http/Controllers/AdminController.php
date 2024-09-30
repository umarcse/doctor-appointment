<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Admin;
use App\Models\Patient;
use App\Models\Doctor;
use App\Models\Appointment;
use Auth;
class AdminController extends Controller
{
    //? Show index page of login for ADMIN

    public function Adminlogin(){
        if(Auth::guard('admin')->check()){
            return redirect()->route('admin-dashboard');
        }
        return Inertia::render('Admin/Login');
    }
    public function Adminregister(){
        return Inertia::render('Admin/Register');
    }

    public function AdminSave(Request $request){

        $table = new Admin;
        $table->name = $request->name;
        $table->email= $request->email;
        $table->password = Hash::make($request->password);
        $table->save();

        return redirect()->route('admin-login-route');

    }

    public function AdminSignIn(Request $request){
        
        $data = $request->all();

        if(Auth::guard('admin')->attempt(['email' => $data['email'], 'password' => $data['password']])){

            return redirect()->route('admin-dashboard');
            
        }else{
            
            return redirect()->route('admin-login-route');
        }
    
    }

    public function AdminDashboard(){

        $data = [];

        

        $numberofdoctor = Doctor::count();
        $numberofpatient = Patient::count();

        //dd($numberofpatient);
        $numberofappointment = Appointment::where('status', 1)->count();
        $data['doctor'] = $numberofdoctor;
        $data['paitent'] = $numberofpatient;
        $data['appointment'] = $numberofappointment;
        return Inertia::render('Admin/Dashboard', compact('data'));
    }

    public function AdminLogout(){

        Auth::guard('admin')->logout();
        return redirect()->route('admin-login-route');
    }

    public function AddDoctor(){

        return Inertia::render('Admin/Doctor/AddDoctor');
    }

    public function StoreDoctor(Request $request){
        
        $table = new Doctor;
        $table->name = $request->name;
        $table->email = $request->email;
        $table->passoword = Hash::make($request->password);
        $table->address = $request->address;
        $table->specialities = $request->specialities;
        $table->experience = $request->experience;
        $table->fees = $request->fees;
        $table->degree = $request->degree;
        $table->distric = $request->distric;
        $table->about = $request->about;
        $table->save();

        if($table){
            return redirect()->back()->with('status', 'Data Saved Successfully');
        }
    }

    public function DoctorList(){
        
        $doctors = Doctor::orderBy('created_at', "DESC")->paginate(6);
       //dd($doctors);
        return Inertia::render('Admin/Doctor/DoctorList', compact('doctors'));
    }

    public function DoctorSingle($id){

        $table = Doctor::find($id);
        $auth = Auth::guard('admin');
        $admin = $auth->name;

        $role = Auth::guard('admin')->name;
        //dd($auth);
       // dd($admin);
        return Inertia::render('Admin/Doctor/DoctorSingle', compact('table', 'admin'));
    } 

    public function DoctorDelete($id){
        
        try {
           
            $table = Doctor::destroy($id);
            return redirect()->route('doctor-list');
        } catch (\Throwable $th) {
           
            return redirect()->back();
        }
    }

    public function DoctorEdit($id){
        
        $table = Doctor::find($id);
        return redirect()->route('add-doctor')->with('data', $table);
    }

    public function DoctorUpdate(Request $request, $id){
       
        $table =  Doctor::find($id);
        $table->name = $request->name;
        $table->email = $request->email;
       // $table->passoword = Hash::make($request->password);
        $table->address = $request->address;
        $table->specialities = $request->specialities;
        $table->experience = $request->experience;
        $table->fees = $request->fees;
        $table->degree = $request->degree;
        $table->distric = $request->distric;
        $table->about = $request->about;
        $table->save();

        if($table){
            return redirect()->route('doctor-list');
        }
    }

    //? Appoointment List 
    public function AppointmentList(){


        $list = Appointment::orderBy('id', 'desc')->with('doc', 'pat')->paginate(7);
       // dd($list);

        return Inertia::render('Admin/Appointment', compact('list'));
    }

    public function AppointmentDestroy($id){
        
        Appointment::destroy($id);

        return redirect()->back()->with('status', 'Deleted Successfully');
    }
}
