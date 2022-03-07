// Boring stuff
const express = require('express');
const fs = require('fs');
const db = require("./Develop/db/db.json");
const htmlroutes = require("./routes/htmlroutes")
const apiroutes = require("./routes/api");


const PORT =  3001;
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes);


// Listening at npm start..
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}!! `))