import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

export const AuthContext = createContext(null)

const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

 const singUpHandle = (email,password)=>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 const signinEmailPass = (email, password)=>{
     setLoding(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 const logOut = ()=>{
     setLoding(true)
    return signOut(auth)
 }

 useEffect(()=>{
 const unsubmit = onAuthStateChanged(auth, (currenuser)=>{
 console.log('user', currenuser)
 setUser(currenuser)
  setLoding(false)
 })

 return ()=> unsubmit()
 },[])

 const authInfo = {singUpHandle,signinEmailPass,user,logOut,loding};
    return (
        <div>
    <AuthContext.Provider value={authInfo}>
        {children} 
    </AuthContext.Provider>
        </div>
    );
};

export default AuthProvaider;