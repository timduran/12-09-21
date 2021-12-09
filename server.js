const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'example', 'index.html'))
})

app.listen(3000)
