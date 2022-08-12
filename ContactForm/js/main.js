// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBhXL42W9FIlNGEQjJl_pdEA3At_2d0-AQ",
  authDomain: "primarchweb-app.firebaseapp.com",
  databaseURL: "https://primarchweb-app-default-rtdb.firebaseio.com",
  projectId: "primarchweb-app",
  storageBucket: "primarchweb-app.appspot.com",
  messagingSenderId: "935109999830",
  appId: "1:935109999830:web:68ad1f1e6e8d4fa9035d77",
  measurementId: "G-S1RXNX9F55"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
