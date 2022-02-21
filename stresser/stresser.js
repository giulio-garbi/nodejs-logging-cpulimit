//who = process.argv[0]
who = 'http://localhost:8080/'
logFn = "/tmp/log.txt"

const axios = require('axios')
const Tail = require('tail').Tail;

async function stress(dest) {
	while(true){
		await axios.get(dest)
	}
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
	logline = {'entry':entryName, 'rtMs':rtMs, 'whenMs':whenMs}
	console.log(JSON.stringify(logline));
});

stress('http://localhost:8080/')