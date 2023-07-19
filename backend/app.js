const express = require('express')
const app = express()
const port = 5173

app.get('/', (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})