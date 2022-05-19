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

app.use(express.json());
app.get('/api/detailedrecipe', async(req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM "Preparation";')
            // console.log(dbresult.rows);
        res.status(201).send(rows);
    } catch (error) {
        // console.log('error');
        res.status(500).send(error);
    }
});
// app.post('/api/preparation', (req, res) => {
//     pool
//         .query('INSERT INTO "Preparation" (preparation_id,description) VALUES ($1,$2);', [res.body.preparation_id, res.body.description])
//         .then(result => res.json(result.rows))
//         .catch((err) => console.error(err))
// });


app.post('/api/detailedrecipe', async(req, res) => {
    try {
        console.log(req.body);
        //const { rows } = await pool.query(`INSERT INTO "Preparation"(preparation_id,description) VALUES($1,$2) RETURNING * `, [5, "Hello"]);
        const { rows } = await pool.query(`INSERT INTO "Preparation"(preparation_id,description) VALUES($1,$2) RETURNING * `, [req.body.preparation_id, req.body.description]);
        res.status(201).send(rows);
    } catch (error) {
        res.status(500).send(error);
    }
});




app.listen(3000, () => console.log("server is listening on port 3000"));