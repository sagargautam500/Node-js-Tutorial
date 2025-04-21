const mango = require("mongodb");

const mongoClient = mango.MongoClient;

const url =
  "mongodb+srv://sagar389:sagar389@rentalcluster.zliqyrl.mongodb.net/?retryWrites=true&w=majority&appName=rentalCluster";

let _db;

const mongoConnect = (callback) => {
  mongoClient.connect(url)
    .then((client) => {
      // console.log("data:", client);
      console.log("Database connect...............");
      _db=client.db('homerental');
      callback();
    })
    .catch((err) => {
      console.log("error occur while connect to database :", err);
    });
};

const getDB=()=>{
  if(!_db){
    throw new Error('Mongodb not connected !');
  }
  return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDB=getDB;