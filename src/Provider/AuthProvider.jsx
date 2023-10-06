import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../fairbase/fairbase.config";
import { useState } from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;