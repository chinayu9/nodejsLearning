全局对象与全局变量
在nodejs中全局对象是global,所有全局变量（除了global本身以外）都是global对象的属性。

pocess(进程)
process对象是一个全局变量,即global对象的属性
process.nextTick()方法将callback添加到‘next tick 队列’。一旦当前事件轮询队列的任务全部完成，在next tick队列
中的所有callbakcs会被依次调用

__dirname 当前模块的文件夹绝对路径名称
__filename  当前模块的文件名称--绝对路径
setTimeout()  clearTimeout()
setInterval()  clearInterval()
setImmediate()  clearImmediate()