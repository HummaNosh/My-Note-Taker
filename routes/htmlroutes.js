const main2 = require('express').Router();
const path = require('path');
const api = require("./api")
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET /notes should return the notes.html file.
main2.get ("/notes", (req, res) => 
res.sendFile(path.join(__dirname, "../public/notes.html"))
);


// GET * should return index.html as default
main2.get ("*", (req, res) => 
res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = main2;