import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKXB_DVyQwzPwBYpB-3O_QHAmOrwTfG1E",
    authDomain: "whatsapp-clone-65846.firebaseapp.com",
    projectId: "whatsapp-clone-65846",
    storageBucket: "whatsapp-clone-65846.appspot.com",
    messagingSenderId: "3103103476",
    appId: "1:3103103476:web:0741dfd55563348428c1a1",
    measurementId: "G-PNLE0TMERH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;