import firebase from 'firebase';
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVO72vbBkkd1bW0hzGv0tpuQqMnZ-sl6I",
  authDomain: "whatsapp-mern-ca932.firebaseapp.com",
  projectId: "whatsapp-mern-ca932",
  databaseURL: "https://whatsapp-mern-ca932.firebaseio.com",
  storageBucket: "whatsapp-mern-ca932.appspot.com",
  messagingSenderId: "647909872231",
  appId: "1:647909872231:web:d9ff871b8921b11c7a7ac2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebass.auth();
// const provider = new firebase.auth().GoogleAuthProvider();

export { auth };
// export { auth, provider };
export default db;