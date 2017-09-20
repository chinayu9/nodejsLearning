let fs = require('fs');
let data = '';
let dataCount = 0;
let readerStream = fs.createReadStream('output.txt');
let writerStream = fs.createWriteStream('output.txt');
/*
readerStream.setEncoding('UTF8');
readerStream.on('data',(chunk)=>{
	//console.log(chunk);
	console.log(++dataCount);
	data += chunk;
});
readerStream.on('end',()=>{

	console.log(data);
});
readerStream.on('error',(err)=>{
	console.log(err.stack);
});
readerStream.pipe(writerStream);
console.log('程序执行完毕');
*/
/*
writerStream.cork();
writerStream.write('some ','UTF8',()=>{
	console.log('第一次写入');
});
writerStream.write('data ','UTF8',()=>{
	console.log('第二次写入');
});
writerStream.uncork();
*/
/*
console.log(readerStream._readableState.flowing);
console.log('程序执行完毕');
*/

/*
function writeOneMillionTimes(writer,data,encoding,callback){
	let i = 8888;
	write();
	function write(){
		let ok = true;
		while(ok && i-- > 0){
			ok = writer.write(data,encoding,i === 0 ? callback : null);
		}
		if (i > 0) {
			console.log('drain',i);
			writer.once('drain',write);
		}
	}
}
data = 'hello world\n';


writeOneMillionTimes(writerStream,data,'UTF8',function(){
	console.log('百万条数据写入完毕');
});
*/
readerStream.on('data',(chunk)=>{
	console.log(`Received ${chunk.length} bytes of data.`);
	readerStream.pause();
	console.log('There will be no additional data for 1 second.');
	setTimeout(()=>{
		console.log('Now data will start flowing again.');
		readerStream.resume();
	},5000);
});