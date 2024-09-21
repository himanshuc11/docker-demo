const express = require('express')
const { MongoClient } = require("mongodb");

const uri = "mongodb://mongo-backend:27017";
const client = new MongoClient(uri);

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const database = client.db('test');
  const movies = database.collection('movies');
  const list = await movies.findOne()
  res.send(JSON.stringify(list))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})