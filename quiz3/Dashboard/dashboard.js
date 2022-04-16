const { response } = require('express');
const express = require('express');
var path = require('path');
//const http = require('http');
//const document = require('document');
var quizzlet = express();
//var app = connect();
//app.listen(5000);
quizzlet.use(express.static(__dirname + 'quiz3/'));
function greetUser(request, response){
    response.send("Welcome dear user");
}

//$('head').append('<link rel="stylesheet" type="text/css" href="style.css">');
quizzlet.get('/', function(request, response){
    response.sendFile(path.resolve(__dirname + '/DASHBOARD.HTML'));
    // response.sendFile(path.resolve(__dirname + '/style2.css'));
});
//var fileName = 'dashboard.html';
// quizzlet.get('/dashboard',function(request,response){
//     response.sendFile(fileName,options,function(err)
//     {
//         if(err) {
//             next(err);
//         }
//         else    
//         {
//             console.log('sent : ',fileName);
//         }
//     });
// });
// quizzlet.post('/',function(request,response){
//    const body = request.body;

//    var response_body = {
//        username : body.username,
//        password : body.password
//    };

//     response.render('Welcome to quizzlet Website ! ',response_body);
// });
quizzlet.listen(4000, function(request,response){
    console.log('listening to port number 4000');
    //console.log('This is dashboard.js');
});



console.log("express server should be up & running. Please go to http://localhost:4000");