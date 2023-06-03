import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";  

const firebaseConfig = {
    apiKey: "AIzaSyAYFMxzbPsPXmfP1oonjHGKVec041DKOGY",
    authDomain: "disney-plus-clone-4b3a7.firebaseapp.com",
    projectId: "disney-plus-clone-4b3a7",
    storageBucket: "disney-plus-clone-4b3a7.appspot.com",
    messagingSenderId: "912190502664",
    appId: "1:912190502664:web:47a9d35145eede99041ebd"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage };
export default db;
