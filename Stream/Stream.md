Nodejs中有四种基本的流类型：
1.Readable - 可读的流 （例如 fs.createReadStream()）
2.writable - 可写的流 （例如 fs.createWriteStream()）
3.Duplex - 可读写的流 （例如 net.Socket）
4.Transform - 在读写过程中可以修改和变换数据的Duplex流 （例如 zlib.createDeflate()）

所有的Stream对象都是EventEmitter的实例。常用的事件有：
1.data - 当有数据可读时触发
2.end - 没有更多的数据可读时触发
3.error - 在接收和写入过程中发生错误时触发
4.finish - 所有数据已被写入到底层系统时触发