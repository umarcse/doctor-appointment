<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
class DoctorController extends Controller
{
    //? Index page of doctor login

    public function DoctorLoginIndex(){
        return Inertia::render('Doctor/Login');
    }

    public function DoctorSignIn(Request $request){
        
        $data = $request->all();
        $pass = Hash::make($request->password);
        if(Auth::guard('doctor')->attempt(['email' => $data['email'], 'password' => $pass])){
            dd('okay');
        }else{
            dd('not okay');
        }


    }
}
