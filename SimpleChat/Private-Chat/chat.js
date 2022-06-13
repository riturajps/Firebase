// Your web app's Firebase configuration
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
// Initialize Firebase
firebase.initializeApp(config);
var database = firebase.database();
var room = 'Select a Room';
var key;
var newRoom;
var ref;
var oldUsn = " ";
var oldMess = " ";
usn = Math.floor(Math.random() * (999 - 100 + 1) + 100);
var max = 10;
function chat() {
  if (room.localeCompare('Select a Room') != 0) {
    firebase.database().ref(room).push({
      usn: usn + ": ",
      message: document.getElementById("message").value
    });
    checkCounter(room);
    document.getElementById("message").value = "";
  }
}
function changeRoom(roomValue) {
  if (roomValue == '')
    roomValue = document.getElementById("roomKey").value+"/";
  else
    roomValue = document.getElementById("roomSelection").value;
var newRoom = roomValue;
  if (newRoom.localeCompare('Select a Room') != 0) {
    document.getElementById('input').style.display = 'block';
    document.getElementById("header").innerHTML = "<h1>" + room.substring(0,
      room.length - 1) + "</h1>";
    if (newRoom.localeCompare(room) != 0) {
      room = newRoom;
      document.getElementById("header").innerHTML = "<h1>" + room.substring(0,
        room.length - 1) + "</h1>";
      document.getElementById("page").innerHTML = "";
      ref = firebase.database().ref(room);

    }
    ref.on('value', function(snapshot) {
      document.getElementById("page").innerHTML = ""; 
      firebase.database().ref(room).once("value").then(function(snapshot) {

        document.getElementById("page").innerHTML = ""; var count = max;
        snapshot.forEach(function(childSnapshot) {
          if (count > 0) {
            var username = childSnapshot.val().usn;
            var mess = childSnapshot.val().message;
            var myUSN = usn + ": ";
            if (childSnapshot.val().usn != null)
              if (username == myUSN) {
                document.getElementById("page").innerHTML +=
                  "<span id=\"mypage\">" + username +
                  mess + "</span> <br>"
                ;
              } else {
                document.getElementById("page").innerHTML +=
                  username +
                  mess + "<br>";
              }
            count--;
          }
        });
      });
    });
  }
  else {
    document.getElementById("header").innerHTML = " ";
    //reset the page's HTML
    document.getElementById("page").innerHTML = " ";
    //Hides the inputs
    document.getElementById('input').style.display = 'none';
  }
}
function checkCounter(thisRoom) {
  ref = firebase.database().ref('/');
  ref = ref.child(thisRoom + '/counter');
  ref.transaction(function(counter) {
    if (counter != max)
      return counter + 1;
    else {
      deleteMessage(thisRoom);

    }
  });
}
function deleteMessage(refer) {
  var times = 1;
  firebase.database().ref(refer).once("value").then(function(snapshot) {
    //For the first message in the room
    snapshot.forEach(function(childSnapshot) {
      if (times > 0) {
        firebase.database().ref(room + "/" + childSnapshot.key).set({
          usn: null,
          message: null

        });
      }
      times--;
    });
  });
}
function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};
function checkKey(e) {
  if (e.keyCode == 13) {
    chat();
  }
}
function checkKey2(e){
  if (e.keyCode == 13) {
    changeRoom('');
  }
}
