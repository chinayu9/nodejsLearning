/*
以下方式已经弃用
//创建长度为10字节的Buffer实例
var buf = new Buffer(10);
//通过给定的数组创建Buffer实例
var buf = new Buffer([10,20,30,40,50]);
//通过一个字符串来创建Buffer实例 
var buf = new Buffer('hello world','utf-8');

//创建长度为10字节的Buffer实例
var buf = Buffer.alloc(10);
//通过给定的数组创建Buffer实例
var buf = Buffer.from([10,20,30,40,50]);
//通过一个字符串来创建Buffer实例 
var buf = Buffer.from('hello world','utf-8');
var buf = Buffer.allocUnsafe(10);
*/

/*
let buf = Buffer.alloc(256);
let len = buf.write('hello world');
console.log('写入字节数：' + len);
let data = buf.toString('utf-8',10);
console.log('读取出来的数据：' + data);
*/

/*
let buf = Buffer.alloc(26);
for(let i = 0; i< 26;i++){
	buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf-8',0,5));
console.log(buf.toString(undefined,0,5));
console.log(buf);
*/

/*
let buf = Buffer.from('{"key":"value"}');
console.log(buf);
let json = buf.toJSON(buf);
console.log(json.data);
*/

/*
let buf1 = Buffer.from('hello ');
let buf2 = Buffer.from('world');
let buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3);
console.log(buf3.toString());
*/

/*
let buf1 = Buffer.from('ABCDE');
let buf2 = Buffer.from('ABCD');
let result = buf1.compare(buf2);
if (result < 0) {
	console.log(buf1 + ' 在 ' + buf2 + ' 之前');
}else if (result == 0) {
	console.log(buf1 + ' 与 ' + buf2 + ' 相同');
}else{
	console.log(buf1 + ' 在 ' + buf2 + ' 之后');
}
*/

/*
let buf1 = Buffer.from('ABCD');
let buf2 = Buffer.alloc(3);
buf1.copy(buf2);
console.log('buf2 content: ' + buf2);
*/
/*
let buf1 = Buffer.from('ABCD');
let buf2 = buf1.slice(1,3);
console.log('buf2 content:' + buf2);
*/
console.log(Buffer.poolSize);