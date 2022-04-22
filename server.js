const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/download', (req, res) => {
  const file = `${__dirname}/download/35mb.apk`;
  res.download(file);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
