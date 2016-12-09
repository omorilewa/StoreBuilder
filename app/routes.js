var express = require('express');
var path  = require('path');

var firebase = require('firebase');


var config = {
    apiKey: "AIzaSyBJ-NUTzTtQoAeEUSH_GKl1Rcyd9G8hZvU",
    authDomain: "storebuilder-2e770.firebaseapp.com",
    databaseURL: "https://storebuilder-2e770.firebaseio.com",
    storageBucket: "storebuilder-2e770.appspot.com",
    messagingSenderId: "237724006816"
  };
var app = firebase.initializeApp(config);

var router = express.Router();
module.exports = router;
router.get('/',function(req,res){
	
	res.render('pages/index');
});
router.get('/index',function(req,res){
	
	res.render('pages/index');
});

router.get('/about',function(req,res){
	res.render('pages/about');
});

router.post('/about',function(req,res){
   // var firstname = req.body.firstname;
   // var lastname = req.body.lastname;
 
});

router.get('/contact',function(req,res){
    res.render('pages/contact');

});

router.post('/contact',function(req,res){
    


});

router.get('/:storename',function(req,res){
	console.log(req.params.storename);
    firebase.database().ref("products/").on('value',function(snapshot) {
        var value = snapshot.val();
        //console.log(value);
      	for(va in value){
           //console.log(va);
          if(req.param.storename === va){
          	//console.log('store exists');
          }
          else{
          	//console.log('store doesnt exist');
          }
       	}


       	//console.log(value[req.params.storename]);
       
 });
});

