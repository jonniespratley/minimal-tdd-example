'use strict';
const express = require('express');

const PORT = process.env.PORT || 9001;
const HOST = process.env.IP || '0.0.0.0';

const app = express();

app.use(express.static('public'));
app.listen(PORT, HOST, () => {
  console.log(`Server listening at ${HOST}:${PORT}`);
});
