const mongoose = require('mongoose');
const {MONGODB_URI} = require('./server.config')
const connectDB = async()=>{
    try {
      await mongoose.connect(MONGODB_URI,{
        dbName:'Problem',
      })
    } catch (error) {
      console.log('DB error',error);
      throw error;
    }
}

module.exports = connectDB;
