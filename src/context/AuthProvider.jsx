import React, { useEffect } from "react";
import AuthContext from "./AuthContext";
import { useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading,useLoading]=useState(true)

const signInUser=(email,password)=>{
    useLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const userLogin=(email,password)=>{
    useLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const userLogout=()=>{
    useLoading(true)
    return signOut(auth)
}

const info = { user, setUser,
    loading,
    useLoading,signInUser,
    userLogin,
    userLogout,

   };


useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth ,(currentUser)=>{
        setUser(currentUser)
        console.log(currentUser)
        useLoading(false)
    })
    return()=>{
         unsubscribe()
    }
   
},[])




  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
