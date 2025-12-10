const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/server.config')
const app = express();



app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT} 🚀`)
})
