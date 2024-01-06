import React from 'react';
import useAuth from "../customHooks/useAuth";
import { Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const {currentUser} = useAuth()
  return currentUser ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>
};

export default PrivateRoute;