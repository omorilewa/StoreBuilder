'use strict';

var firebase = require("firebase");


  var config = {
    apiKey: "AIzaSyBJ-NUTzTtQoAeEUSH_GKl1Rcyd9G8hZvU",
    authDomain: "storebuilder-2e770.firebaseapp.com",
    databaseURL: "https://storebuilder-2e770.firebaseio.com",
    storageBucket: "storebuilder-2e770.appspot.com",
    messagingSenderId: "237724006816"
  };
  firebase.initializeApp(config);

function SmartShop() {
  this.checkSetup();


// Initializes SmartShop.


 
  
  this.signInButton = document.getElementById('sign-in');

  this.signInButton.addEventListener('click', this.signIn.bind(this));
  
 

  this.initFirebase();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
SmartShop.prototype.initFirebase = function() {
  // TODO(DEVELOPER): Initialize Firebase.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

// Signs-in Friendly Chat.
SmartShop.prototype.signIn = function() {
  // TODO(DEVELOPER): Sign in Firebase with credential from the Google user.
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
};
SmartShop.prototype.signInUser = function(email,password) {
  // TODO(DEVELOPER): Sign in Firebase with credential from the Google user.
    this.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
  // ...
});
};


// Triggers when the auth state change for instance when the user signs-in or signs-out.
SmartShop.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!

  window.location.replace("/views/pages/contact.ejs");
    // We load currently existing chant messages.
    
  } else { // User is signed out!
    /
};



// Checks that the Firebase SDK has been correctly setup and configured.
SmartShop.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  }
};

window.onload = function() {
  window.SmartShop = new SmartShop();
};
