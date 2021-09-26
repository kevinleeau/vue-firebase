import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCSPN27C4fioFU2j5fGrGq-q26jpvMclBo",
    authDomain: "vue-firebase-ef026.firebaseapp.com",
    projectId: "vue-firebase-ef026",
    storageBucket: "vue-firebase-ef026.appspot.com",
    messagingSenderId: "654175273241",
    appId: "1:654175273241:web:8675e41d87761ab53a4588"
  }
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export { timestamp }
  export default firebaseApp.firestore()