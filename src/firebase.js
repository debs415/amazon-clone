//import firebase from "firebase";
import * as firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvqosxnJReOszlWZvyvcLZJzrXn-P2lUo",
  authDomain: "clone-dea5b.firebaseapp.com",
  projectId: "clone-dea5b",
  storageBucket: "clone-dea5b.appspot.com",
  messagingSenderId: "628647425248",
  appId: "1:628647425248:web:c69707f3cfb093b8a7cc85",
  measurementId: "G-4038C7B3MV",
});

const auth = firebase.auth();

export { auth };
