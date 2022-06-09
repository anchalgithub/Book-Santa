import firebase from 'firebase'
require('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyBRGLvFTSg8a1nuF32IKOYiqQmQvDj5E6I",
    authDomain: "project-73-e7ebd.firebaseapp.com",
    databaseURL: "https://project-73-e7ebd-default-rtdb.firebaseio.com",
    projectId: "project-73-e7ebd",
    storageBucket: "project-73-e7ebd.appspot.com",
    messagingSenderId: "740647720232",
    appId: "1:740647720232:web:9693bb66151529a7c26c1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

