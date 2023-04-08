const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//create out express app
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Request-With, Content-Type, Accept");
    next();
})

//database stuff:
const uri ="mongodb+srv://jayTest:5wjLxUIYSMWU2Mah@cluster0.gutge6k.mongodb.net/?retryWrites=true&w=majority" ;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () =>{
    console.log("MongoDB connected");
})
.catch(err => console.log(err))

app.use(bodyParser.json());

// routes
app.get('/', (res, req) => {
    res.send("yay home page")
})

const UserRoute = require('./routes/User');
app.use('/users', UserRoute)

//start server
app.listen(3000, () => {
    console.log("listening on port 3000");
})