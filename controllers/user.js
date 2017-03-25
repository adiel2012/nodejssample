module.exports = function(app) {
	
app.get('/hola', function(req, res) { 
    console.log("hola");
    res.render("user/list.html");	
 });

app.get('/user/create', function(req, res) { 
    res.render("user/create.html");	
});
   
app.post('/user/docreate', function(req, res) { 
    console.log(req.body.name);
    res.render("user/details.html",{"name":req.body.name});	
 });
  
  
  
  
  
  
  
  
  
}