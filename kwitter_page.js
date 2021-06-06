var firebaseConfig = {
    apiKey: "AIzaSyCs_vEJ2KjRWN19CkLkj_vfkxOjFeYyUXI",
    authDomain: "kwitter-3cbf0.firebaseapp.com",
    databaseURL: "https://kwitter-3cbf0-default-rtdb.firebaseio.com",
    projectId: "kwitter-3cbf0",
    storageBucket: "kwitter-3cbf0.appspot.com",
    messagingSenderId: "101859448552",
    appId: "1:101859448552:web:b77c04b4cb6da002345b5d",
    measurementId: "G-L4SVWN96CQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}





function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}