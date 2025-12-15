const mongoose = require('mongoose');
const {MONGODB_URI, NODE_ENV} = require('./server.config')
const connectDB = async()=>{
    try {
        if(NODE_ENV==='development'){
            await mongoose.connect(MONGODB_URI,{
              dbName:'Problem',
            })
        }
    } catch (error) {
      console.log('DB error',error);
      throw error;
    }
}

module.exports = connectDB;
