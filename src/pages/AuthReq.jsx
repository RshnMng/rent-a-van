import React from 'react';
import {Outlet, Navigate, useLocation } from 'react-router-dom';


export default function AuthReq(props){
    
      const auth = props.props.auth;
      const location = useLocation();
      
       if(!auth) {
        return <>
                <Navigate to='/login' state={{message: 'You must sign in first', goto: location.pathname}}/>
              </>
       }
       
       return <>
        <Outlet />
       </>
    
}