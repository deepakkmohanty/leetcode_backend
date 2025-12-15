const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/server.config')
const apiRoute = require('./routes');
const errorHandler = require('./utils/errorHandler');
const {DBConnect} = require('./config')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

app.get('/',(req,res)=>{
    res.json({
        message:"Hello from backend!"
    })
})

app.use('/api',apiRoute)

// Error Middleware
app.use(errorHandler)

app.listen(PORT,async()=>{
    console.log(`Server running on port: ${PORT} 🚀`)
    await DBConnect();
    console.info('DB connected successfully ✨')
});


