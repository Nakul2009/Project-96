const firebaseConfig = {
  apiKey: "AIzaSyCFy0wICTK1EfDR6EGK3ogsjpFQPPB4P9g",
  authDomain: "social-media-project-73b4e.firebaseapp.com",
  databaseURL: "https://social-media-project-73b4e-default-rtdb.firebaseio.com",
  projectId: "social-media-project-73b4e",
  storageBucket: "social-media-project-73b4e.appspot.com",
  messagingSenderId: "973613904705",
  appId: "1:973613904705:web:fdf4b3eba7a2bbdd8727c0",
  measurementId: "G-JMNDZM9LF0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+ user_name +"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "chatting_place.html";
}
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}