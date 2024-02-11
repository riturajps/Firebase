(function(){
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      return true;
    },
  
  
  // Hide This //
  //  uiShown: function() {
  //    document.getElementById('loader').style.display = 'none';
  //  }
  // Hide End //
  
  },
  
  signInFlow: 'popup',
  signInSuccessUrl: 'main.html',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
 // tosUrl: 'main.html',
 //privacyPolicyUrl: '<https://www.google.com>'
};
ui.start('#firebaseui-auth-container', uiConfig);

})()