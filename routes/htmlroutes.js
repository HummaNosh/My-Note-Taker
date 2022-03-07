const main = require('express').Router();

const api = require("./api")


// GET /notes should return the notes.html file.
main.get ("/notes", (req, res) => 
res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET * should return the index.html file.
main.get ("*", (req, res) => 
res.sendFile(path.join(__dirname, "/public/index.html"))
);


module.exports = main;