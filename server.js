// Boring stuff
const express = require('express');
const fs = require('fs');
const db = require("./Develop/db/db.json");

const PORT = 3001;
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET /notes should return the notes.html file.
app.get ("/notes", (req, res) => 
res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET * should return the index.html file.
app.get ("*", (req, res) => 
res.sendFile(path.join(__dirname, "/public/index.html"))
);

