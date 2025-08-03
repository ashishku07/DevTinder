const mongoose = require("mongoose")
const connectDB = async () => { await mongoose.connect("mongodb+srv://NamasteAshish:qgTE9luraPQvWUvn@namastenodejsashish.jg2qndi.mongodb.net/devTinder") };

module.exports = connectDB;