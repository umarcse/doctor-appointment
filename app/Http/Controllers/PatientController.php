<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Patient;
use App\Models\Appointment;
use Illuminate\Support\Facades\Hash;
use Auth;
class PatientController extends Controller
{
    // Patient Login Page
    public function PatientLoginIndex(){

        return Inertia::render('Patient/Login');
    }

    //? Patient Register Page  

    public function PatientRegisterIndex(){
        return Inertia::render('Patient/Register');
    }

    //? Save Patient to db
    public function SavePatient(Request $request){

        $table = new Patient;
        $table->name = $request->name;
        $table->email= $request->email;
        $table->password = Hash::make($request->password);
        $table->save();

        return redirect()->route('patient-login');

    }

    //? Sign In condition

    public function PatientSignIn(Request $request){
       
        $data = $request->all();
        if(Auth::guard('patient')->attempt(['email' => $data['email'], 'password' => $data['password']])){

            return redirect()->route('home-route');
        }else{
            return redirect()->route('patient-login');
        }
    }

    //? Patient Logout

    public function PatientLogout(){
       
        Auth::guard('patient')->logout();
        return redirect()->route('home-route');
    }

    public function AppointmentList(){

        $id = Auth::guard('patient')->user()->id;
        $table = Appointment::with('doc','pat')->where('patient_id', $id)->paginate(6);
        $loginornot = Auth::guard('patient')->check();
        $data = $loginornot? true : false;

        $name = $loginornot? Auth::guard('patient')->user()->name : '';
        $name = explode(" ", $name);
        $name = $name[0];
        return Inertia::render('AppointmentList', compact('table',  'name'));

    }

    public function AppDestroy($id){
        
        Appointment::destroy($id);
        return redirect()->back()->with('status', 'Deleted Successfully');
    }


   


}
