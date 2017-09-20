const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
/*
event.on('newListener',function(){
	console.log('有新事件注册');
});

event.on('removeListener',function(){
	console.log('有注册事件被移除了');
});


let fn1,fn2;
event.on('test',fn1 = function(arg1,arg2){
	console.log('test 事件触发',arg1,arg2,this);
});
event.on('test',function(arg1,arg2){
	console.log('test 事件再次触发',arg1,arg2);
});
event.removeListener('test',fn1);
setTimeout(function(){
	event.emit('test','arg1 参数0','arg2 参数1');
},1000);
*/

event.once('newListener',(eventName,listener)=>{
	if (eventName === 'test') {
		//在开头插入一个新的监听器
		event.on('test',()=>{
			console.log('B');
		});
	}
});

event.on('test',()=>{
	console.log('A');
});
event.emit('test');