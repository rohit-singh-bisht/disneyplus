
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqw_RMjblTy6_o3Axl51RIkp63T1unms8",
    authDomain: "disneyplus-fddda.firebaseapp.com",
    projectId: "disneyplus-fddda",
    storageBucket: "disneyplus-fddda.appspot.com",
    messagingSenderId: "410513506546",
    appId: "1:410513506546:web:bf8e1d1cdba94da58a506b",
    measurementId: "G-D1TSPD05DZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const storage = firebase.storage();


  export { provider };
  export default db;