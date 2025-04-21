const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/database");

module.exports = class Favourite {
  constructor(homeId){
    this.homeId=homeId;
  }
  save(){
        let db=getDB();
        return db.collection("favourites").findOne({homeId:{$eq:this.homeId}}).then((existFav=>{
          if(!existFav){
            return db.collection("favourites").insertOne(this);
          }
          return  Promise.resolve();
        }))
  }

 

  static getToFavourite() {
    let db = getDB();
    return db.collection("favourites").find().toArray();
  }

  static fetchDeleteFavouriteData(delHomeId) {
    let db=getDB();
     return db.collection("favourites").deleteOne({homeId:{$eq:delHomeId}})
     }
  
};
