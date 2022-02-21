const express = require('express');
const logger = require('morgan');
const fs = require("fs");

const port = 8080;

const logFname = "/tmp/log.txt"

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
  
var accessLogStream = fs.createWriteStream(logFname, { flags: 'a' })

const app = express();
app.use(logger(':method :url - rt :response-time ms - exit :date[iso]', { stream: accessLogStream }));
  
app.get('/', async (req, res) => {
	await sleep(1000);
	res.send('<h1>Front Page</h1>');
});
  
app.listen(port);