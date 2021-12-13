import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCMTPSKxjpnSR_IZSONUuwEJoooPdx93pE",
        authDomain: "team-voting-app-480d6.firebaseapp.com",
        projectId: "team-voting-app-480d6",
        storageBucket: "team-voting-app-480d6.appspot.com",
        messagingSenderId: "958570734856",
        appId: "1:958570734856:web:f19c0d06eaa74f5c68f8bd",
        measurementId: "G-BN0QJGE5R5"  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();