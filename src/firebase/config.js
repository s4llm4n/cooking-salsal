import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDEH8Tx_1ubVkVcumsL3P7MtdfdUXMiaSI",
    authDomain: "cooking-salsal.firebaseapp.com",
    projectId: "cooking-salsal",
    storageBucket: "cooking-salsal.appspot.com",
    messagingSenderId: "449703847572",
    appId: "1:449703847572:web:9f35310eb63dd307d1f681"
  }

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()

export { projectFirestore }