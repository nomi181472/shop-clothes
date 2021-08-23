import firebase  from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyBxBU3WNuRSIaotRue242knIZv801qQLH4",
    authDomain: "crwn-db-65b7a.firebaseapp.com",
    projectId: "crwn-db-65b7a",
    storageBucket: "crwn-db-65b7a.appspot.com",
    messagingSenderId: "277233175036",
    appId: "1:277233175036:web:7646fc8e415a629a9b4a79",
    measurementId: "G-DTL7M26VH4"
  };
  firebase.initializeApp(firebaseConfig)

  export const auth=firebase.auth()
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp:"select_account"})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
  export default firebase

