const express = require('express')
const app = express()

const { Pool } = require('pg')
const pool = new Pool({
    host: 'tyke.db.elephantsql.com',
    user: 'retrcbpo',
    database: 'retrcbpo',
    password: 'MGMQbd3OmeYsRJmpXTjsQvxxbEqYjZGi',
    // port: 5432,
});


app.get('/', function(req, res) {
    res.send('Hello World')
})


app.get('/api/recipes', function(req, res) {
    pool
        .query('SELECT * FROM Recipe;')
        .then(results => console.log(results))
        .catch(err => console.error(err))
})

app.listen(3000);