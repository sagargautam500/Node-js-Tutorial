const testRuntimeError=()=>{
  console.log("runtime error ")
  // console.log(x); //error occur: x is not defined
  let num=5;
  // num(); //error occur :variable call as a function
}
module.exports=testRuntimeError;