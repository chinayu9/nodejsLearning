let http = require('http');
let fs = require('fs');
let url = require('url');
//console.log(url.parse('http://movie.douban.com/subject/11529526/'));
let opt = {
	host:'10.248.174.61',
	port:8124,
	path:'http://github.com/request/request/issues/2047',
	timeout:5000
	/*
	headers:{
		'Accept':'text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/webp,image\/apng,*\/*;q=0.8',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
		'Cache-Control':'no-cache',
		'Cookie':'PHPSESSID=web1~ofla022s714jl4f9g2m33brcq0; afpCT=1; sf_remember=e890fee81d73ba964bbdeb2629c9956d; _ga=GA1.2.645899979.1505461181; _gid=GA1.2.195932116.1505693040; _gat=1; Hm_lvt_e23800c454aa573c0ccb16b52665ac26=1506045241,1506050439,1506058498,1506061375; Hm_lpvt_e23800c454aa573c0ccb16b52665ac26=1506066842; io=slI06GtQXIlm-yhMO_JX',
		'Host':'segmentfault.com',
		'Referer':'https://segmentfault.com/t/node.js',
		
	}
	*/
};

let req = http.request(opt,(res)=>{
	let html = '';
	res.on('data',(chunk)=>{
		console.log('success');
		console.log(chunk.toString());
		html += chunk;
	});
	res.on('end',()=>{
		let writeStream = fs.createWriteStream('./httpRequest.html');
		writeStream.write(html);
		writeStream.end();
	});
});
req.on('error',(err)=>{
	console.log(err.message);
});
req.end();


/*
http.get(opt,(res)=>{
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
*/