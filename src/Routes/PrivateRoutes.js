import React, { useContext, useDeferredValue } from 'react';
import { Navigate } from 'react-router-dom';
import  { AuthContext } from '../components/context/UserContext';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    console.log(user)
    // const navigate = useNavigate
    if(loading){
        return <div>Loading...</div>
    }
    if(user && user.uid ){
        console.log(user.uid)
        return children;
    }
    else{
    return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoutes;