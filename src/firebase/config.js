import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPs7cZ4fVXZrn6AhmcxWpcu_acgGV0w4E",
  authDomain: "photogram-5b0a3.firebaseapp.com",
  projectId: "photogram-5b0a3",
  storageBucket: "photogram-5b0a3.appspot.com",
  messagingSenderId: "729354597201",
  appId: "1:729354597201:web:1d1db52de1ae0eebdbd970"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };
