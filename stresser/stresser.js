//who = process.argv[0]
who = 'http://localhost:8080/'
logFn = "/tmp/log.txt"

const axios = require('axios')
const Tail = require('tail').Tail;

async function call(dest) {
	await axios.get(dest)
	console.log('fatto')
}


var tail = new Tail(logFn);
tail.watch()
tail.on("line", ln => {
	parts = ln.split(" - ");
	entryName = parts[0];
	rtStr = parts[1].substr(3, parts[1].length - 6);
	rtMs = parseFloat(rtStr);
	whenStr = parts[2].substr(5, parts[2].length - 5);
	whenMs = Date.parse(whenStr);
	console.log([entryName, rtMs, whenMs]);
});

call('http://localhost:8080/')