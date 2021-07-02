import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDEN9RQgIJwoVrO13lwNu79QZjKfuMkYJg",
    authDomain: "social-network-d9233.firebaseapp.com",
    databaseURL: "https://social-network-d9233-default-rtdb.firebaseio.com",
    projectId: "social-network-d9233",
    storageBucket: "social-network-d9233.appspot.com",
    messagingSenderId: "120206119234",
    appId: "1:120206119234:web:ea7990dec8fb532a2078db",
    measurementId: "G-XKPPXL372T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

auth.useEmulator("http://localhost:9099")
if(window.location.hostname == "localhost"){
    db.useEmulator("localhost", "8080")
}

export { db, auth, storage };
export default firebase;