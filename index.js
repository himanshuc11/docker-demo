const express = require('express')
const { MongoClient } = require("mongodb");

const fs = require('node:fs');
fs.readFile('/run/secrets/express_env', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  process.env = null
});

const uri = "mongodb://mongo-backend:27017";
const client = new MongoClient(uri);

const app = express()
const port = 3000

console.log(process.env)
app.get('/', async (req, res) => {

  const database = client.db('test');
  const movies = database.collection('movies');
  const list = await movies.findOne()
  res.send(JSON.stringify(list))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})