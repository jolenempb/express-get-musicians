const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async (req, res) => {
    const musician = await Musician.findAll();
    res.json(musician);
});

app.get('/musicians/:id', async (req, res) => {
    const id = req.params['id'];
    const musicianId = await Musician.findByPk(id);
    res.json(musicianId);
})


module.exports = app;