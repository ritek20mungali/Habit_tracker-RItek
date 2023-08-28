const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser'); // Import missing semicolon

const db = require('./config/db');

// Import routes from the route controller module
const route = require('./route_controller/route_cont');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connecting Assets Folder / Static Files
app.use("/assets", express.static('./assets'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route); 

app.listen(5001, (err) => {
    if (!err) {
        console.log("Server is up and running at port 5001");
    } else {
        console.error(`Error in starting server ${err}`);
    }
});
