const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localthost:80"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParse.json());

//parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true}));