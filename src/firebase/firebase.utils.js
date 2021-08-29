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
  

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if (!userAuth) return ;

 
    const userRef=firestore.doc(`user/${userAuth.uid}`)
    
    const userSnapshot=await userRef.get()

    if(!userSnapshot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date()
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) { 
        console.log(`Error At User Auth:${error}`)
      }

    }
return userRef
  }
  firebase.initializeApp(firebaseConfig)

 export const auth=firebase.auth()
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp:"select_account"})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
  export default firebase

