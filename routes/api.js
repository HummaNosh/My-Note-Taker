const main = require('express').Router();
const path = require('path');
const { Router } = require('express');
const { fstat } = require('fs');
const htmlroutes = require("./htmlroutes");
const uuid = require('../helpers/uuid')
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

main.get('/notes', (req, res)  =>
    readFromFile("./db/db.json" ).then((data) => res.json(JSON.parse(data)))
);

main.post('/notes', (req, res) => {
    const {note, text} = req.body;
    if (note && text) {

        const newNote = {
            note,
            text,
            feedbackID: uuid(),
        };

        readAndAppend( newNote, "./db/db.json");
    }


})

module.exports = main;