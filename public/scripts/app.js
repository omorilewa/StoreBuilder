'use strict';

// Initializes FriendlyChat.
function FriendlyChat() {


  // Shortcuts to DOM Elements.
  
  this.signInButton = document.getElementById('sign-in');
  this.signUpButton = document.getElementById('sign-up');


  this.signInButton.addEventListener('click', this.signInUser.bind(this));
  this.signUpButton.addEventListener('click', this.signUp.bind(this));



  this.initFirebase();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
FriendlyChat.prototype.initFirebase = function() {
  // TODO(DEVELOPER): Initialize Firebase.
  this.auth = firebase.auth();
  this.database = firebase.database();

  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

FriendlyChat.prototype.signUp = function(email,password) {
  // TODO(DEVELOPER): Sign in Firebase with credential from the Google user.
    this.auth.createUserWithEmailAndPassword(email, password).then(function(response){ window.location.replace("about")}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  // ...
});
};


FriendlyChat.prototype.signInUser = function(email,password) {
  // TODO(DEVELOPER): Sign in Firebase with credential from the Google user.
    this.auth.signInWithEmailAndPassword(email, password).then(function(response){ window.location.replace("contact")}).catch(function(error) {
  // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorMessage);
  // ...
});

};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
FriendlyChat.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    // Get profile pic and user's name from the Firebase user object.
   // var profilePicUrl = null;   // TODO(DEVELOPER): Get profile pic.
    //var userName = null;        // TODO(DEVELOPER): Get user's name.
  
    // Get profile pic and user's name from the Firebase user object.
   
    //this.signOutButton.removeAttribute('hidden');

    // Hide sign-in button.
    //this.signInButton.setAttribute('hidden', 'true');
       
      // We load currently existing chant messages.
    
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    
    //this.signOutButton.setAttribute('hidden', 'true');
     console.log('not authenticated');
    // Show sign-in button.
    //this.signInButton.removeAttribute('hidden');
  }
};



// Checks that the Firebase SDK has been correctly setup and configured.


window.onload = function() {
  window.friendlyChat = new FriendlyChat();
};
