const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'index.html'))
})
app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'movies.html'))
})
app.get('/songs', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'songs.html'))
})

const dog = {
  age: 6,
  breed: `Rottwiller`,
  gender: `male`
}

app.get(`/dog`, (req, res) => {
  res.json(dog)
})

app.listen(3001)

