'use strict';

let express = require('express');

let PORT = process.env.port || 3000;

let app = express();
let router = express.Router;

require('./route/routes.js')(router);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});