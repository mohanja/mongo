
// Node.js program to demonstrate
// the fs.readFile() method
  
// Include fs module
var fs = require('fs');



// for(var i=1;i<=10;i++){
// fs.writeFile(
//     `./backup/text-${i}.html`,quote,(err)=>{
//     console.log("completed writing !!!")
// })
// }
// var [, , openfile]=process.argv;
// for(let i=1;i<=openfile;i++){
//    fs.writeFile(
//      `./backup/text-${i}.html`,quote,(err)=>{
// console.log("completed writing !!!")
// })  
// }

// const quote3="Dream without fear ,love without limits❤️"

// fs.appendFile("./fun.html", "\n"+quote3,(err)=>{
//     console.log("complete appending!!!")
// })

fs.unlink("./awesome.html",(err)=>{
    console.log("delete succesufuly")
})
