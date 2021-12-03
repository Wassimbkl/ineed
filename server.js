const express = require("express");
const app = express();
const server = require("http").Server(app);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/',function(req,res){
    res.render('Home')
})

server.listen(3030,console.log('server is listening on port 3000...'))