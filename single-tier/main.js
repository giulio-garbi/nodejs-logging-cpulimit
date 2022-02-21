const express = require('express');
const logger = require('morgan');
const port = 8080;
  
const app = express();
app.use(logger(':method :url - rt :response-time ms - exit :date[iso]'));
  
app.get('/', (req, res) => {
  res.send('<h1>Front Page</h1>');
});
  
app.listen(port);