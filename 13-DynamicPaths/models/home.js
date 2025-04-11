//core module 
const fs=require('fs');
const path=require('path');

//local module:
const rootDir=require('../utils/pathUtils');
const Favourite = require('./favourite');

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
    // console.log("id checked :",this.id)
    Home.fetchAll((registerHome)=>{
      if(this.id){ //edit existing home 
       registerHome= registerHome.map(home=>home.id===this.id ? this:home)
      }else{   //add new home 
        this.id=(Math.floor(Math.random() * 100)).toString();
        registerHome.push(this);
      }
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

  static fetchDeleteData(homeId,callback) {
   Home.fetchAll(homes=>{
   const Homes= homes.filter(home=>homeId!==home.id)
   fs.writeFile(homeDataPath,JSON.stringify(Homes),()=>{
    Favourite.fetchDeleteFavouriteData(homeId,callback)
   })
   })
  }
};
