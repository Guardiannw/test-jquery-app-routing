const fs = require('fs');
const express = require('express');
const cheerio = require('cheerio');

const app = express();

const users = {
    54: {
        name: 'Nathaniel Webb',
        age: 24
    },
    22: {
        name: 'Jeff Bernstein',
        age: 32
    }
};


app.use(express.static('public', {extensions: ['html', 'htm']}));

app.get('/create/:id', (req, res) => {
    res.sendFile('create.html' ,{root: __dirname + '/public'});
});

app.get('/:id', (req, res) => {
    res.send(users[req.params.id]);
});

app.listen(8080);