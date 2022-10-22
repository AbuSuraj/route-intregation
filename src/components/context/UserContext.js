import React, {  createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
 
import app from '../../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
    // const user = {displayName: 'Akash'}
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGithub =() =>{
        return signInWithPopup(auth, githubProvider)
    }
    const signInWithFB = () =>{
        return signInWithPopup(auth,facebookProvider)
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
            // console.log('auth state changed', currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {user:user, loading, createUser, signIn,logOut, signInWithGoogle, signInWithGithub, signInWithFB};
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;