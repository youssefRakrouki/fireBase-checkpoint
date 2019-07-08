  
 
 var firebaseConfig = {
    apiKey: "AIzaSyBbRXg-3BYJTMRdLC60lPe0q7CtlIPR56A",
    authDomain: "checkpoint-firebase-2ce46.firebaseapp.com",
    databaseURL: "https://checkpoint-firebase-2ce46.firebaseio.com",
    projectId: "checkpoint-firebase-2ce46",
    storageBucket: "",
    messagingSenderId: "974884877994",
    appId: "1:974884877994:web:099e5080d8e5098a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

var messageRef= firebase.database().ref('checkpoint firebase');
function submitForm(e){
    
    
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var option=document.getElementById('option').value;
    var number=document.getElementById('number').value;
    console.log(name);
    
    saveMessage(name,email,option,number);
}
document.getElementById('contactForm').addEventListener('submit',submitForm);

function saveMessage(name,email,option,number){
  console.log(123);

var newMessageRef= messageRef.push();
newMessageRef.set({
name: name,
email: email,
option: option,
number: number



});
}
  
  
  
  
  
  
  
  $(document).ready(function(){
        $("body").css("background-color","#8c8c8c");

    // Activate Carousel
    $("#myCarousel").carousel();
        // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
  });
  