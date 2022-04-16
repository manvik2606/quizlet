
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quizzlet";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("corporation");
  data = open("data.json");
  var myobj ={ data};
  dbo.collection("quizzletdb").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});


const login = async () => {
    try{
        const createLogin = (`CREATE TABLE tblLogin(username VARCHAR(10),password VARCHAR(10))`);
        console.log(createLogin,"Table tblLogin created!");
    }
    
    catch(err){
        console.log(err);
    }
}

//const data = async () => {
//    try{
//        const questions = (`INSERT INTO tblLogin VALUES(z$data.json')`);
//    }
//}
module.exports = login