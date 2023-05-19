import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtMAKRfR_N9plUC26JWnX2gAFi1TtcRlQ',
  authDomain: 'cooking-ninja-site-e369e.firebaseapp.com',
  projectId: 'cooking-ninja-site-e369e',
  storageBucket: 'cooking-ninja-site-e369e.appspot.com',
  messagingSenderId: '176425234844',
  appId: '1:176425234844:web:dcc18fee85160411ed1859',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
