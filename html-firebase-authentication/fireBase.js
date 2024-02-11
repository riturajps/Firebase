var fireBase = fireBase || firebase;
var hasInit = false;
	  var config = {
    apiKey: "#",
    authDomain: "#",
    databaseURL: "#",
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#"
  };
  // Initialize Firebase
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}