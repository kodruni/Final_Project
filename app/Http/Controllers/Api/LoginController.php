<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    use AuthenticatesUsers;
 
    public $successStatus = 200;
     
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
     
    protected function sendFailedLoginResponse(Request $request)
    {
        return [
            'status' => 'fail',
            'message' => 'Wrong login credentials',
            'data' => []
        ];
    }
     
    protected function sendLoginResponse(Request $request)
    {
        $token = Str::random(80);
     //what is guard? forcefill?
        $this->guard()->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();
     
        return [
            'status' => 'success',
            'message' => 'Login successful',
            'data' => [
                'token' => $token
            ]
        ];
    }
     
    protected function loggedOut(Request $request)
    {
        return [
            'status' => 'fail',
            'message' => 'Successfully logged out',
            'data' => []
        ];
    }
    
}
