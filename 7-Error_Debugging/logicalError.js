const testLogicalError=()=>{
  console.log("logical error section")
  let num=5;
  if(num=10){ //error is found: num==10 exactly 
    console.log("number 10 is found",num);
  }else{
    console.log("number 10  is not found");
  }
}
module.exports=testLogicalError;