let http = require('http');
let fs = require('fs');
let url = require('url');

http.get("http://www.baidu.com",(res)=>{
	console.log("start.....");
	let html = '';
	res.on('data',(chunk)=>{
		html += chunk;
	});
	res.on('end',()=>{
		let writeStream = fs.createWriteStream('./httpRequest.html');
		writeStream.write(html);
		writeStream.end();
	});
});
