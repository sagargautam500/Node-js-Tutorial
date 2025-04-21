// //local module:
const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/database");
const Favourite = require("./favourite");

module.exports = class Home {
  constructor(_id,houseName, price, location, rating, photoUrl, description) {
    if (_id) {
      this._id = _id;
    }
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
   
  }

  save() {
    const db = getDB();
    const UpdateFields = {
      houseName: this.houseName,
      price: this.price,
      location: this.location,
      rating: this.rating,
      photoUrl: this.photoUrl,
      description: this.description,
    };
    if (this._id) {
      // console.log("Update data..");
      return db
        .collection("homes")
        .updateOne(
          { _id: new ObjectId(String(this._id)) },
          { $set: UpdateFields }
        );
    } else {
      // console.log("insert data.......");
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll() {
    let db = getDB();
    return db.collection("homes").find().toArray();
  }

  static fetchSingleData(homeId) {
    // console.log(homeId)
    let db = getDB();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }

  static fetchDeleteData(homeId) {
    let db = getDB();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
