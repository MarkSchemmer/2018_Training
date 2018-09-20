const express = require('express');
const mongoose = require('mongoose');
//const router = require('./config/routes');

const PORT = 8000;

const app = express();


// instead when data base is setup pass app to router(app) then 
// it can take posts and other commands and give a response...
// from the server in this case that will be mongodb....
// will have to use the router with a mongodb to 
// truly have a full-stack web app....
// router(app);

app.set(mongoose.connect('mongodb://localhost/authors'), {useNewUrlParser:true});

app.listen(PORT, () => console.log('doing the good work all day long!'));