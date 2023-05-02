import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContexts = createContext(null);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGooglePopup = () => {
    return signInWithPopup(auth, provider);
  };

  const loginWithGithubPopup = () => {
    return signInWithPopup(auth, providerGithub);
  };

  const createUser = (email, password) => {
    console.log(email, password);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
   return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
},[])
  const authInfo = {
    loginWithGooglePopup,
    loginWithGithubPopup,
    createUser,
    logInUser,
    user,
    logOut,
  };

  return (
    <AuthContexts.Provider value={authInfo}>{children}</AuthContexts.Provider>
  );
};

export default AuthProviders;
