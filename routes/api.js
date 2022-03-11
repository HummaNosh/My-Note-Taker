const main = require('express').Router();
const path = require('path');
const { Router } = require('express');
const { fstat } = require('fs');
const htmlroutes = require("./htmlroutes");
const uuid = require('../helpers/uuid')
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { append } = require('express/lib/response');
const db = require("../db/db.json");
const { debug } = require('console');

main.get('/notes', (req, res)  =>
    readFromFile("./db/db.json" ).then((data) => res.json(JSON.parse(data)))
);

main.post('/notes', (req, res) => {
console.log(req.body);
    const { noteTitle, noteText, id } = req.body;

    if (noteTitle && noteText && id) {

      const newFeedback = {
        noteTitle,
        noteText,
        id: uuid,
      };
  
      readAndAppend(newFeedback, './db/db.json');
  
      const response = {
        status: 'success',
        body: newFeedback,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting feedback');
    }
  });
  

module.exports = main;