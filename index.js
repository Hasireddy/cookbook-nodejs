const express = require('express')
require("dotenv").config();
const pool = require("./db/client");
const app = express();
// app.get('/', function(req, res) {
//     res.send('Hello World')
// });


// app.get('/api/recipes', (req, res) => {
//     pool
//         .query('SELECT * FROM "Preparation";')
//         .then((result) => res.json(result.rows))
//         .catch((err) => console.error(err))
// });


app.get('/api/detailedrecipe', async(req, res) => {
    try {
        const dbresult = await pool.query('SELECT * FROM "Preparation";')
        console.log(dbresult.rows);
    } catch (error) {
        console.log('error');
    }
});
// app.post('/api/preparation', (req, res) => {
//     pool
//         .query('INSERT INTO "Preparation" (preparation_id,description) VALUES ($1,$2);', [res.body.preparation_id, res.body.description])
//         .then(result => res.json(result.rows))
//         .catch((err) => console.error(err))
// });



app.listen(3001, () => console.log("server is listening on port 3001"));