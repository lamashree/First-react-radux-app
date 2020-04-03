const express = require("express");
const app = express();
const port = 5000;
const bodyParser =require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'reactAppData';
let db ="";
let dbClient = "";


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    next();
});

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
 dbClient = client
 db = client.db(dbName)

//   client.close();
});
app.use(bodyParser.json());
// app.use(bodyParser.)

app.post('/addLists', (request, response)=>{
    console.log("request come from client", request.body)
    response.send("add list is working")
    db.collection("users").insertOne(request.body, function(error, result){
        if(error) {
            console.log("error", error)
        } else {
            console.log("result", result )
        }
        dbClient.close()
    })
})

app.get("/list", function(req, res) {
    db.collection("users").find({}).toArray(function(err, result) {
        if(err) {
            console.log("error", err)
        } else res.json({
            status: 200,
            data: result,
            message: 'User list loaded successfully'  
        })

        // dbClient.close()
    })
  });


app.get('/demo', (request, response)=>{
    response.send("hello from express")
})

app.listen(port, ()=>{
    console.log("server is listening port", port)
})