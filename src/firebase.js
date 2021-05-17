import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAPo4j3nhjiUz_sZ12kHSW_QTWQFB-By8c",
  authDomain: "idwokethat.firebaseapp.com",
  projectId: "idwokethat",
  storageBucket: "idwokethat.appspot.com",
  messagingSenderId: "932232412332",
  appId: "1:932232412332:web:6a0a621cbc4ea740d67309",
  measurementId: "G-F100VTXPTV"
};

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage();
export const db = firebase.firestore()
export const auth = firebase.auth()
