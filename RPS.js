var firebaseConfig = {
    apiKey: "AIzaSyAhsqYxYit08u2CEKi0wiiP-ayeyFm8vUc",
    authDomain: "rps-g-ae792.firebaseapp.com",
    databaseURL: "https://rps-g-ae792.firebaseio.com",
    projectId: "rps-g-ae792",
    storageBucket: "rps-g-ae792.appspot.com",
    messagingSenderId: "708479119483",
    appId: "1:708479119483:web:fbfd48fc37abcbf12a72de",
    measurementId: "G-WQ2CHJSNSZ"
  };

  firebase.initializeApp(firebaseConfig);

var playerRock = document.querySelector('#rock');
var playerPaper = document.querySelector('#paper');
var playerScissors = document.querySelector('#scissors');

var userResult = document.querySelector('#userResult');
var computerResult = document.querySelector('#computerResult');


let randomCount = Math.random(){

  if (randomCount <= 0.4) {
    return 'rock';
  } else if (randomCount > 0.4 && randomCount <= 0.6) {
    return 'paper';
  } else {
    return 'scissors';
  };
}




