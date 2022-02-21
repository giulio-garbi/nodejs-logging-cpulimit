const express = require('express');
const logger = require('morgan');
const port = 8080;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
  
const app = express();
app.use(logger(':method :url - rt :response-time ms - exit :date[iso]'));
  
app.get('/', async (req, res) => {
	await sleep(1000);
	res.send('<h1>Front Page</h1>');
});
  
app.listen(port);