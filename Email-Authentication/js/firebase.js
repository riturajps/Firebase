// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAS7jpXkSkQimFVxqh4KB9JJWAVwYeLQMc",
  authDomain: "riturajps-official.firebaseapp.com",
  projectId: "riturajps-official",
  databaseURL: "https://riturajps-official-default-rtdb.firebaseio.com",
  storageBucket: "riturajps-official.appspot.com",
  messagingSenderId: "290350549856",
  appId: "1:290350549856:web:ffa18e4491fdc366536c05",
  measurementId: "G-B5PVWMJSYG"
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
