const express = require('express');
//const http = require('http');
//const document = require('document');
var quizzlet = express();
var path = require('path');
//var app = connect();
//app.listen(5000);
quizzlet.use(express.static(__dirname + 'quiz3/SIGNIN.HTML'));
quizzlet.use(express.static(__dirname + 'quiz3/styel.css'));
 quizzlet.get('/',greetUser);
 function greetUser(request, response){
     response.sendFile(path.resolve(__dirname + '/SIGNIN.HTML'));
     //response.sendFile(path.resolve(__dirname + '/styel.css'));
     
 }

quizzlet.post('/',(request,response) => {
    const body = request.body;

    var response_body = {
        username : body.username,
        password : body.password
    };

    response.send('Welcome to quizzlet Website ! ',response_body);
});
quizzlet.listen(4000, function(request,response){
    console.log('listening to port number 4000');
    //console.log('This is login.js');a
});



console.log("express server should be up & running. Please go to http://localhost:4000");


