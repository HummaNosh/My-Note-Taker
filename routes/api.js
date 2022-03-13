const main = require('express').Router();
const path = require('path');
const htmlroutes = require("./htmlroutes");
const uuid = require('../helpers/uuid')
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { append } = require('express/lib/response');
const db = require("../db/db.json");
const { debug } = require('console');

main.get('/notes', (req, res)  =>
    readFromFile("db/db.json" ).then((data) => res.json(JSON.parse(data)))
);


main.post('/notes', (req, res) => {

  const NewNote = JSON.parse(fs.readFileSync("db/db.json"));
    const Note = req.body;
    Note.id = uuid();
    NewNote.push(Note);
    fs.writeFileSync("db/db.json", JSON.stringify(NewNote));
    res.json(NewNote);

  });

  
  main.delete("/notes/:id", (req, res) => {
    const NewNote = JSON.parse(fs.readFileSync("db/db.json"));
    const deletedOne = NewNote.filter (
      (removeNote) => removeNote.id !== req.params.id
    );
  fs.writeFileSync("db/db.json", JSON.stringify(deletedOne));
  res.json(deletedOne);
  });

module.exports = main;