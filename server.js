const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

// app.get('/', (req, res) => {
//   // res.send('Hello World!')
//   res.sendFile(path.join(__dirname, 'example', 'index.html'))
// })

// const dog = {
//   name: 'Beef',
//   age: 2,
//   breed: 'Chihuahua'
// }

// app.get('/dog', (req, res) => {
//   res.json(dog)
// })

app.listen(3000)
