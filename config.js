import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDoUKOULe9a6QlxIz40s23C_73JT4RfXfc",
  authDomain: "cyclingyay.firebaseapp.com",
  projectId: "cyclingyay",
  storageBucket: "cyclingyay.appspot.com",
  messagingSenderId: "315886531520",
  appId: "1:315886531520:web:e5d926c084268ef1de4e25"
};

if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig); 
}
export default firebase.firestore()

