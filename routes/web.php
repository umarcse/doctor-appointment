<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DoctorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//? Admin Route

Route::controller(AdminController::class)->group(function(){
    Route::prefix('admin')->group(function () {
        Route::get('/login', 'Adminlogin')->name('admin-login-route');
        Route::get('/register', 'Adminregister');
        Route::post('/save/admin' ,'AdminSave');
        Route::post('/signin', "AdminSignIn");
        
       
        
        Route::middleware('admin')->group(function () {
            Route::get('/logout', 'AdminLogout');
            Route::get('/add/doctor', 'AddDoctor')->name('add-doctor');
            Route::get('/dashboard', 'AdminDashboard')->name('admin-dashboard');
            Route::post('/store/doctor', 'StoreDoctor');
            Route::get('/doctor/list', 'DoctorList')->name('doctor-list');
            Route::get('doctor/single/{id}', "DoctorSingle");
            Route::get('/doctor/delete/{id}', "DoctorDelete")->name('doctor-delete');
            Route::get('/doctor/edit/{id}', "DoctorEdit")->name('doctor-edit');
            Route::post('/update/doctor/{id}', "DoctorUpdate");

            //?? Appointment 
            Route::get('/appointments', 'AppointmentList')->name('appointment-list');
            Route::get('/delete/app/{id}', 'AppointmentDestroy')->name('app-delete');
        });
        
    });
});

//? -- Admin Route

//? -- Patient Route 
Route::controller(PatientController::class)->group(function() {
    Route::prefix('patient')->group(function(){
        Route::get('/login', 'PatientLoginIndex')->name('patient-login');
        Route::get('/register', 'PatientRegisterIndex');
        Route::post('/signin', 'PatientSignIn');
        Route::post('/save/user', "SavePatient");
        Route::get('logout', 'PatientLogout')->name('patient-logout');
        Route::middleware('patient')->group(function(){
            Route::get('/app/destroy/{id}', 'AppDestroy')->name('app-destroy');
            Route::get('/appointment/list', 'AppointmentList')->name('patient-app-list');
        });
    });
});

//? Home Route __ 
Route::controller(HomeController::class)->group(function(){
    Route::get('/', 'Index')->name('home-route');
    Route::get('/doctor/single/{id}', 'DoctorDetails');
    Route::get('/all/doctors', 'AllDoctorPage')->name('all-doctor-route');
    Route::get('/gettargetdoc/{data}', 'GetTargetDoc');

    //? Save Appointment 
    ROute::post('/appointment/save', 'SaveAppointment')->name('save-appointment');

});

//? Doctor ROute

Route::controller(DoctorController::class)->group(function(){
    Route::prefix('doctor')->group(function(){
        Route::get('/login', 'DoctorLoginIndex')->name('doctor-login');
        Route::post('/signin', 'DoctorSignIn');
    });
});




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
