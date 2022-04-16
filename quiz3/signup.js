const express = require('express');
const router = require('router');

const quizzlet = express();
var path = require('path');
quizzlet.use(express.static(__dirname + 'quiz3\SIGNUP.HTML'));
quizzlet.use(express.static(__dirname + 'quiz3\styel.css'));
quizzlet.get('/',function(request,response){
    response.sendFile(path.resolve(__dirname + '/SIGNUP.HTML'));
});

quizzlet.post('/',function(request,response){
    const body = request.body;

    var response_body = {
        username : body.username,
        password : body.password,
        confirm_password : body.confirm_password,
        email : body.email,
    };
    
    response.render('signup.html',response_body);
    console.log('Welcome to quizzlet Website ! ',response_body);
    quizzlet.listen('port',4000);
});


quizzlet.listen(4000, function(request,response){
    console.log('listening to port 4000')
});







//console.log('Welcome to quizzlet Website ! ');
module.exports = router;