var express = require('express');
var app = express();
var http = require('http').Server(app);


   app.set('view engine','ejs');
   app.set("views","./");
  app.use(express.static(('./')));


    app.get("/",function(req,res){
        res.render("index")
    });

    app.get("/teste",function(req,res){
        res.render("perfil-psicologo");
    });


http.listen(process.env.PORT || 8080, function(){
  console.log('listening on', process.env.PORT|| 8080);
});