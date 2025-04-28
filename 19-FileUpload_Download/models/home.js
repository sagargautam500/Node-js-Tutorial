const { default: mongoose } = require("mongoose");

const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rating: String,
  photo: String,
  rules:String,
  description: String,
});

// homeSchema.pre('findOneAndDelete',async function(next){
//   console.log('delete favourite home while delete Actual Home ..')
//  const homeId=this.getQuery()._id; 
//  await Favourite.deleteMany({homeId:homeId});
//  next();
// })

module.exports = mongoose.model("Home", homeSchema); //Home is Collection name .in db Show: homes



/* 
save():save() ,(save() method automatic insert data with the help of schema)
find():find(),(find() method all fetch data automatic)
fetchSingleData():,(findById()method fetch data which meets id)
deleteData():,(findOneAndDelete(),deleteOne(),deleteMany())
*/