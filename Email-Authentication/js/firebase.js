// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhXL42W9FIlNGEQjJl_pdEA3At_2d0-AQ",
  authDomain: "primarchweb-app.firebaseapp.com",
  databaseURL: "https://primarchweb-app-default-rtdb.firebaseio.com",
  projectId: "primarchweb-app",
  storageBucket: "primarchweb-app.appspot.com",
  messagingSenderId: "935109999830",
  appId: "1:935109999830:web:68ad1f1e6e8d4fa9035d77",
  measurementId: "G-S1RXNX9F55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function () {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
