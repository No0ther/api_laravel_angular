<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Api Employee
Route::get('employees', 'EmployeeController@index');
Route::get('employees/{id}', 'EmployeeController@show');
Route::post('employees', 'EmployeeController@store');
Route::put('employees/{id}', 'EmployeeController@update');
Route::delete('employees/{id}', 'EmployeeController@delete');
// Api Login and relation
Route::post('login', 'AuthController@login');
Route::post('signup', 'AuthController@signup');
Route::post('logout', 'AuthController@logout');