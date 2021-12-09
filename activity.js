const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'movies.html'))
})
app.get('/songs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'songs.html'))
})

const dog = {
  age: 6,
  breed: `Rottwiller`,
  gender: `male`
}

app.get(`/dog`, (req, res) => {
  res.json(dog)
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.listen(3001)

