var express =require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');





var app = express();
var port = 8080;
app.use(bodyParser.urlencoded({extended: true }));
app.set('view engine','ejs');
app.use(expressLayouts);




var router = require('./app/routes');
app.use('/',router);

//var apper = require('./app/app');
//app.use('/',apper);
//middleware function that has access to all our requests objects

//set static files

app.use(express.static(__dirname + '/public'));
app.listen(port,function(){

  



console.log('app started');
});


  