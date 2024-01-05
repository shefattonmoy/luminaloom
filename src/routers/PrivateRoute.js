import React from 'react';
import useAuth from "../customHooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth()
  return currentUser ? children : <Navigate to='/login'></Navigate>
};

export default PrivateRoute;