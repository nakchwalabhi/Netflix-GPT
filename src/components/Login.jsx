import React, { useRef, useState } from 'react'
import Header from './Header'
import { isFormValid } from '../utils/formValidation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../utils/firebase.js'


const Login = () => {
    const[isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const toggleForm = () =>{
        setIsSignIn(!isSignIn)
    }
    const validate = () =>{
    const error =  isFormValid(emailRef.current.value, passRef.current.value)
    setErrorMessage(error);
    
    if(error !== null) return;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value).
    then((userCredential)=>{
        const user = userCredential.user;
    }).
    catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
    });
    }
  return (
    <div className='bg-black/50'>
        <div className='relative h-screen '>
            <Header/>
            <img className='w-full h-screen' src='https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg'></img>
            <div className='absolute inset-0 bg-black/50'></div>
        </div>
        <form onSubmit={(e)=>{e.preventDefault();}} className=' rounded-2xl  flex flex-col px-6 py-9 gap-4 w-2/7 bg-black/75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
            <h1 className='text-2xl font-bold'>{isSignIn ? "Sign In":"Sign Up" }</h1>
            {!isSignIn && <input type='text' placeholder='Full Name' className='px-3 py-2 rounded bg-neutral-800'></input>}
            <input ref={emailRef} type='email' placeholder='Email' className=' w-full px-3 py-2 rounded bg-neutral-800'></input>
            <input ref={passRef} type='password' placeholder='Password' className='px-3 py-2 rounded bg-neutral-800'></input>
            <p className='font-medium text-red-500'>{errorMessage}</p>
            <button className='bg-red-500 py-2 px-2 rounded' onClick={validate}>{isSignIn ? "Sign In":"Sign Up" }</button>
            <p className='cursor-pointer font-light' onClick={toggleForm}>{isSignIn?"New user? create account":"Already a user? Sign in"}</p>
        </form>
        
        </div>
  )
}

export default Login