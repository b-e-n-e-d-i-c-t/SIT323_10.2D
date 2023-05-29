const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const portNum = 4000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setup the computational routes.
const computeRoute = require('./routes/compute')
app.use('/compute', computeRoute)
//Use ejs 
app.set('view engine', 'ejs')


app.listen(portNum, console.log("Listening on port: ", portNum))