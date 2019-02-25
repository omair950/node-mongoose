const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
var User=require('./user')

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.send('Saufik');
});
app.get('/about', function(req, res) {
    res.send('about page');
  });
  app.get('/home', function(req, res) {
    res.send('home page');
  });
  app.post('/new', function(req, res) {
    res.send(req.body);
  });
  app.post('/postdata',function(req,res){

    if (req.body.username && req.body.password){
    var data={

        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    }
    User.create(data).then((msg)=>{
        res.send("data saved");
        console.log('done');
    }).catch((msg)=>{
        res.send('err in saving data');
    console.log("fail");
    });
    } else {
        res.send('jgfhgf')
    }});
    
    
  mongoose.connect('mongodb://localhost:27017/firstproject', function(err) {
    if(err) {
        console.log('error in connecting to mongodb server');
    } else {
        console.log('connected')
    }
  });

app.listen(3000);