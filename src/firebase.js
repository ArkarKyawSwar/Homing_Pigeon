import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBKYDd4NTKRcRd8tWH48wEV84JxMZhpoJk",
    authDomain: "homing-pigeon-95166.firebaseapp.com",
    projectId: "homing-pigeon-95166",
    storageBucket: "homing-pigeon-95166.appspot.com",
    messagingSenderId: "768654647946",
    appId: "1:768654647946:web:9a266c16a38f2654380373"
  }).auth();

