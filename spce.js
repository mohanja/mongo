const os=require("os")
console.log("free memory",os.freemem()/1024/1024/1024);

console.log("free memory",os.totalmem()/1024/1024/1024);
console.log("version",os.version());
console.log("cpus",os.cpus());