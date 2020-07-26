import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCCjsyc4jr_meCZ1HgL6yywJ59mBvGDRV8",
    authDomain: "react-redux-firebase-4d471.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-4d471.firebaseio.com",
    projectId: "react-redux-firebase-4d471",
    storageBucket: "react-redux-firebase-4d471.appspot.com",
    messagingSenderId: "655989841533",
    appId: "1:655989841533:web:94cb7db0406c665d119b14"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  firebase.firestore()

  export default firebase