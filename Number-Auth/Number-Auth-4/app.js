window.onload=function(){
    render()
}

function render(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render(); 
}

function firebaseAuth(){
    var phoneNumber=document.getElementById("number").value
console.log("phoneNumber",phoneNumber)
  var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      codeResult= window.confirmationResult 
        alert("message send")
    }).catch(function (error) {
        alert("Message Not Send Error Please Try Again")
    });
}

function codeAuth(){
    var varCode=document.getElementById("code").value
    confirmationResult.confirm(varCode).then(function (result) {
        var user = result.user;
        window.location = 'home.html'
    }).catch(function (error) {
        alert("Please Try Again")
        console.log("Sorry Please Try Again")
    });
}