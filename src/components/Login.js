import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const  toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {
      // Validate the form data
      //checkValidateData{email,password}
      console.log(email.current.value);
      console.log(password.current.value);

      const message = checkValidateData(email.current.value,password.current.value);
      setErrorMessage(message);
      console.log(message);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/186b5d52-052d-4779-b061-5eed089a99a6/web/IN-en-20251020-TRIFECTA-perspective_2972aef3-a02d-4d1c-9098-126151b3c3ee_large.jpg" alt="background image"></img>
        </div>
        <form onSubmit = {(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
             {!isSignInForm && (<input type = "text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />)}
            <input ref={email} type = "text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input ref={password} type = "password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" :"Already Registered?Sign in Now  "}</p>
        </form>
    </div>
  );
};

export default Login