在ES6引入TypedArray之前，JavaScript语言没有读取或操作二进制数据流的机制。
Buffer类被引入作为Node.js API的一部分，使其可以在TCP流或文件系统操作等场景中处理二进制数据流。
Buffer类用来创建一个专门存放二进制数据的缓存区。
原始数据存储在Buffer类的实例中。一个Buffer类似于一个整数数组，但Buffer的大小是固定的、且在V8堆外分配物理内存。
Buffer的大小在被创建时确定，且无法调整。
为了使Buffer实例的创建更可靠、更不容易出错，各种new Buffer()构造函数已被 废弃，并由Buffer.from()、Buffer.alloc()、和Buffer.allocUnsafe()方法代替。