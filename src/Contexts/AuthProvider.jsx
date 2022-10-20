import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Google sign in.
  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  //Github sign in
  const githubSignIn = (githubProvider) => {
    return signInWithPopup(auth, githubProvider);
  } 

  // Log out
  const logOut = () => {
    return signOut(auth);
  };

  //Create user with email and password.
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update name
  const profile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //Email verification.
  const verify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //Reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //Sign in with email and Password
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //On auth state change.
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubsCribe();
    };
  }, []);

  const authInfo = { user, googleSignIn, logOut, createUser, profile, verify, resetPassword, userSignIn, githubSignIn};

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
