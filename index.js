'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static(`${__dirname}/build`));
// app.use(cors({
//   origin: 'http://localhost:8080',
// }));

// TODO: fix the url for the backend

app.get('*',(request,response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT,() => {
  console.log('__SERVER_UP__',process.env.PORT);
});
