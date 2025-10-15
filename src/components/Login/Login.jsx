import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
       
    <div className="card bg-base-100 m-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Please Login !</h1>
     <form >
           <fieldset className="fieldset">
            {/*email field  */}
          <label className="label">Email</label>
          <input type="email"
          name='email'
          className="input" placeholder="Email" />
          {/* password field */}
          <label className="label">Password</label>
          <input type="password"
          name='password'
          className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
     </form>
     <p className='text-center'>New to our Website? Please <Link to='/register' className='text-blue-500 hover:text-yellow-400 underline'>Register</Link> </p>
      </div>
    </div>
    );
};

export default Login;