<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;
use App\Models\Appointment;
use Inertia\Inertia;
use Auth;
class HomeController extends Controller
{
    //Index Fun

    public function Index(){
        
        $doctors = Doctor::paginate(4);
        $loginornot = Auth::guard('patient')->check();
        $data = $loginornot? true : false;

        $name = $loginornot? Auth::guard('patient')->user()->name : '';
        
        $name = explode(" ", $name);
       
        $name = $name[0];
       // dd($name);

        //dd($data);
        return Inertia::render('Home', compact('doctors', 'data', 'name'));
    }

    public function DoctorDetails($id){

        $table = Doctor::find($id);
        $userid = 0;
        $auth = Auth::guard('patient')->check();
        if($auth){
            $userid = Auth::guard('patient')->user()->id;
        }
        
        $role = Auth::guard('patient')->name;
        
        return Inertia::render('Single', compact('table', 'auth', 'userid', 'role'));
    }

    public function AllDoctorPage(){
        
        $doctors = Doctor::paginate(10);
        $auth = Auth::guard('patient')->check();
        return Inertia::render('AllDoctor', compact('doctors','auth'));
    }

    public function GetTargetDoc($data){
        
       // dd($data);
        //$spec = $request->spec;
        $doctors = Doctor::where('specialities', $data)->paginate(10);
        $auth = Auth::guard('patient')->check();
        return redirect()->route('all-doctor-route')->with('data', $doctors);

        
     
    }

     //? Save Appointment 
     public function SaveAppointment(Request $request){
        
        $table = new Appointment;
        $table->doctor_id = $request->doctor_id;
        $table->patient_id = $request->patient_id;
        $table->time = $request->time;
        $table->date = $request->date;
        $table->save();
        return redirect()->back()->with('status', 'Successfully Appoitmented');
    }

    
    
}
