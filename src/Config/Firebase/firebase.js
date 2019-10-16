import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAbZRoXYiFUoTUjy1vZF_Ll3k0VyOFLKXU",
  authDomain: "sign-html.firebaseapp.com",
  databaseURL: "https://sign-html.firebaseio.com",
  projectId: "sign-html",
  storageBucket: "sign-html.appspot.com",
  messagingSenderId: "102319128186",
  appId: "1:102319128186:web:b2706c1d30cc7fdfc2c5c3"
};

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}