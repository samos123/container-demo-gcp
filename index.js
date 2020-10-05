'use strict';

const express = require('express');
const mustacheExpress = require('mustache-express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        "name": "world!"
    })
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
