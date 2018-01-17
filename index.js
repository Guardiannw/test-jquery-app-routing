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
    const id = req.params.id;
    const htmlFile = fs.readFileSync('public/create.html');
    const $ = cheerio.load(htmlFile);

    $('head').append('<script>const userId = ' + id + ';</script>');

    res.send($.html());
});

app.get('/:id', (req, res) => {
    res.send(users[req.params.id]);
});

app.listen(8080);