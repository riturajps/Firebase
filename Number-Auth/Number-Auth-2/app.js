

/**
 * @return {!Object} The FirebaseUI config.
 */
function getUiConfig() {
  return {
    'callbacks': {
      'signInSuccess': function(user, credential, redirectUrl) {
        handleSignedInUser(user);
        return false;
      }
    },
    'signInFlow': 'popup',
    'signInOptions': [
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          //size: getRecaptchaMode()
          type: 'image',
          size: 'invisible',
          badge: 'bottomleft'
        }
      }
    ],
    // Terms of service url.
    'tosUrl': 'https://www.google.com'
  };
}

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var handleSignedInUser = function(user) {
  document.getElementById('user-signed-in').style.display = 'block';
  document.getElementById('user-signed-out').style.display = 'none';
  //document.getElementById('name').textContent = user.displayName;
 // document.getElementById('email').textContent = user.email;
 // document.getElementById('phone').textContent = user.phoneNumber;
 // if (user.photoURL){
 //  document.getElementById('photo').src = user.photoURL;
 //    document.getElementById('photo').style.display = 'block';
 // } else {
 //  document.getElementById('photo').style.display = 'none';
 // }
};
                  //user-signed-in
                  //user-signed-out
var handleSignedOutUser = function() {
  document.getElementById('user-signed-in').style.display = 'none';
  document.getElementById('user-signed-out').style.display = 'block';
  ui.start('#firebaseui-container', getUiConfig());
};

firebase.auth().onAuthStateChanged(function(user) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('loaded').style.display = 'block';
  user ? handleSignedInUser(user) : handleSignedOutUser();
});

var deleteAccount = function() {
  firebase.auth().currentUser.delete().catch(function(error) {
    if (error.code == 'auth/requires-recent-login') {
      firebase.auth().signOut().then(function() {
        setTimeout(function() {
          alert('Please sign in again to delete your account.');
        }, 1);
      });
    }
  });
};

var initApp = function() {
  document.getElementById('sign-out').addEventListener('click', function() {
    firebase.auth().signOut();
  });
//  document.getElementById('delete-account').addEventListener(
//      'click', function() {
//        deleteAccount();
//      });
};

window.addEventListener('load', initApp);
