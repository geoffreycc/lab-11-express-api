'use strict';

let express = require('express');

let PORT = process.env.port || 3000;

let app = express();

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});