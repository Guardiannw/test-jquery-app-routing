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

    const data = users[id];

    $('head').append('<script>const data = ' + JSON.stringify(data) + ';</script>');

    res.send($.html());
});

app.listen(8080);