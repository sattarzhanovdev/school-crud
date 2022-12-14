import { auth } from "../App";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyAd-hoEd_zwNzbQn5SDWduKsQUfHQP6ku8",
  authDomain: "school-crud-4b96d.firebaseapp.com",
  projectId: "school-crud-4b96d",
  storageBucket: "school-crud-4b96d.appspot.com",
  messagingSenderId: "564417443787",
  appId: "1:564417443787:web:f01fea4307e445b352284e"
};


const provider = new GoogleAuthProvider()

export const handleLoginWithGoogle = () => signInWithPopup(auth, provider)

export const handleLoginWithEmail = async (useremail, userpassword) => {
  try {
    await signInWithEmailAndPassword(auth, useremail, userpassword)
  }catch{
    
  }
}


export const handleRegistWithEmail = async (email, password, name) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(res.user, {
      displayName: name,
    })
  } catch {
  }
}

export const handleSignOut = () => {
  signOut(auth)
  window.location.reload()
}