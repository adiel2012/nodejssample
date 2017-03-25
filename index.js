var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use("/assets",express.static('assets'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.set("view engine","jade");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


require('./routing.js')(app);



app.get("/",function(req,res){
   console.log("aa2");
   res.render("index");		
});

app.listen(8081);



//  http://stackoverflow.com/questions/11369089/using-separate-controllers-and-routes-in-node-js