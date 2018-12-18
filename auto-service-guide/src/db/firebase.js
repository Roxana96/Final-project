import * as firebase from 'firebase';
const settings = {timestampsInSnapshots: true};


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaCrGRpt0oA1CzPI0pIyfeISARMH_wUaE",
    authDomain: "roxana-sdb.firebaseapp.com",
    databaseURL: "https://roxana-sdb.firebaseio.com",
    projectId: "roxana-sdb",
    storageBucket: "roxana-sdb.appspot.com",
    messagingSenderId: "596229268017"
  };
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;