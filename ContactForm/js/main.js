// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
 apiKey: "AIzaSyAS7jpXkSkQimFVxqh4KB9JJWAVwYeLQMc",
  authDomain: "riturajps-official.firebaseapp.com",
  databaseURL: "https://riturajps-official-default-rtdb.firebaseio.com",
  projectId: "riturajps-official",
  storageBucket: "riturajps-official.appspot.com",
  messagingSenderId: "290350549856",
  appId: "1:290350549856:web:ffa18e4491fdc366536c05",
  measurementId: "G-B5PVWMJSYG"
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
