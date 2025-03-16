const fs=require('fs');
let data="writing file content ,so we have now create file"

fs.writeFile("output.txt",data,(err)=>{
  if(err)console.log("error occur");
  else console.log("write file sucessful")
})