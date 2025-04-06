//core module 
const fs=require('fs');
const path=require('path');

//local module:
const rootDir=require('../utils/pathUtils');
const { error } = require('console');

//fake database::
let registerHome = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    registerHome.push(this);
    const homeDataPath=path.join(rootDir,'data','homes.json');
    fs.writeFile(homeDataPath,JSON.stringify(registerHome),error=>console.log("write data error:",error))
  }

  static fetchAll(callback) {
    const homeDataPath=path.join(rootDir,'data','homes.json');
    // fs.readFile(homeDataPath,(err,data)=>{
    //   if(!err){
    //     registerHome=JSON.parse(data)
    //   }
    // })
    // return registerHome;
    fs.readFile(homeDataPath,(err,data)=>{
      if(!err){
        registerHome=JSON.parse(data)
      }
      callback(registerHome)
    })
  }
};
