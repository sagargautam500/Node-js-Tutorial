//core module
const fs = require("fs");
const path = require("path");

//local module:
const rootDir = require("../utils/pathUtils");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getToFavourite((favourites) => {
      if (favourites.includes(homeId)) {
        callback("home already exist::");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback)
      }
    });
  }

  static getToFavourite(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
  
  static fetchDeleteFavouriteData(delHomeId,callback) {
    Favourite.getToFavourite(homeIds=>{
      const HomesIds= homeIds.filter(homeId=>delHomeId!==homeId)
      // console.log(HomesIds)
      fs.writeFile(favouriteDataPath,JSON.stringify(HomesIds),callback)
    })
  }
};
