// //local module:
const { ObjectId } = require('mongodb');
const { getDB } = require('../utils/database');
const Favourite = require('./favourite');




module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,description,_id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description=description;
    if(_id){
      this._id=_id;
    }
  }

  save() {
    if(_id){
      let db=getDB();
      // db.collection('homes').updateOne({_id:this._id},{})
    }else{
      let db=getDB();
      return db.collection('homes').insertOne(this)
    }
  }

  static fetchAll() {
    let db=getDB();
   return db.collection('homes').find().toArray();
  }

  static fetchSingleData(homeId) {
    // console.log(homeId)
    let db=getDB();
    return db.collection('homes').find({_id:new ObjectId(String(homeId))}).next();
  }

  static fetchDeleteData(homeId) {
    let db=getDB();
    return db.collection('homes').deleteOne({_id:new ObjectId(String(homeId))});
  }
}
