const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Docker-Compose with Nodemon!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})