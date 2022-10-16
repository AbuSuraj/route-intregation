import React, {  createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
 
import app from '../../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
    // const user = {displayName: 'Akash'}
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log('auth state changed', currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {user:user, loading, createUser, signIn,logOut, signInWithGoogle};
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;