const express = require('express');

const app = express();

const cors = require('cors');

const port = 8000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree'] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
