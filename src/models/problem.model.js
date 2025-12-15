const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title can't be empty!"]
    },
    description:{
        type:String,
        required:[true,"Description can't be empty!"]
    },
    difficultyLevel:{
        type:String,
        enum:['easy','medium','hard'],
        required:[true,"Difficulty level can't empty!"],
        default:'easy'
    },
    testcases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
})

const Problem = mongoose.model('Problem',problemSchema)
module.exports=Problem;
