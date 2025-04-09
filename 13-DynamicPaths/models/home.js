//core module 
const fs=require('fs');
const path=require('path');

//local module:
const rootDir=require('../utils/pathUtils');

const homeDataPath=path.join(rootDir,'data','homes.json');


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description=description;
  }

  save() {
    this.id=Math.floor(Math.random() * 100);
    Home.fetchAll((registerHome)=>{
      registerHome.push(this);
      fs.writeFile(homeDataPath,JSON.stringify(registerHome),error=>console.log("write data error:",error))
    })
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath,(err,data)=>{
      callback(!err ?JSON.parse(data):[])
    })
  }

  static fetchSingleData(homeId,callback) {
   Home.fetchAll(homes=>{
   const homeFound= homes.find((home)=>homeId==home.id)
   callback(homeFound)
   })
  }
};
