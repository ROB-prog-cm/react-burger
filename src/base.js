import Rebase from 're-base'
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDPrs4I9_KtognmqJWuV-rECUJ94hPbXc",
  authDomain: "hot-burgers-4f178.firebaseapp.com",
  databaseURL: "https://hot-burgers-4f178-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base