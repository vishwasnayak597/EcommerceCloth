import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCTZYWfOFAZIQxozXpXs8-Hcv7GJbVCv30",
    authDomain: "crown-db-efd99.firebaseapp.com",
    projectId: "crown-db-efd99",
    storageBucket: "crown-db-efd99.appspot.com",
    messagingSenderId: "204009301004",
    appId: "1:204009301004:web:5a17a913e64c40d3913a29",
    measurementId: "G-X9VF8QD41P"
};
firebase.initializeApp(config);
export const createUserProfileDocument= async(userAuth,additionalData)=>{
    //if user is not logged in
    if(!userAuth) return;
    //getting id from firebase auth
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    
    const snapshot=await userRef.get();
   //checking if snapshot exisst or not thereby checking whether user has alredy registered or notadd
   if(!snapshot.exists){
       const {displayName,email}=userAuth;
       const createDat=new Date();
       try{
           await userRef.set({
               displayName,
               email,
               createDat,
               ...additionalData
           });

       }catch(error)
       {
           console.log('Error creating user' ,error.message);
       }
   }

    return userRef;
};

export const addCollectionAndDocuments= (collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);

}

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);
export default firebase;