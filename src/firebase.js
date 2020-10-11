import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4AbrO14aXRsJLa0bTkDeraqjGYQcacdE",
  authDomain: "react-challenge-5b0d0.firebaseapp.com",
  databaseURL: "https://react-challenge-5b0d0.firebaseio.com",
  projectId: "react-challenge-5b0d0",
  storageBucket: "react-challenge-5b0d0.appspot.com",
  messagingSenderId: "104857616486",
  appId: "1:104857616486:web:f7eec2012653d80e54ada7",
  measurementId: "G-J3ZVPL30PN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dtb = firebaseApp.firestore();
const auth = firebase.auth();

export { dtb, auth };

/* 	
pk_test_51HYqU2FNjKOMdukzJJbI5x5iFOAMLDHWGfgmf0UhmcY9eB08pJwCVCwx4kWLCWeZ93IdblBVtBeRPWXVThptx9ur00GNr1uKaw 
*/
