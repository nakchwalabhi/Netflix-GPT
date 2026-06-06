import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
    const dispatch = useDispatch();
    
    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);
    
  return (
    <div>       
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body