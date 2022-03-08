const main = require('express').Router();

const { Router } = require('express');
const { fstat } = require('fs');
const htmlroutes = require("./htmlroutes");
const uuid = require('../helpers/uuid')


main.get('/notes', (req, res)  =>
    readFromFile("./db/db.json" ).then((data) => res.json(JSON.parse(data)))
);

main.post('/api/notes', (req, res) => {
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