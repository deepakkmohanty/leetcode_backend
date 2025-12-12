const UnImplemented = require("../errors/unImplemented.error");

function pingPung(req,res){
    return res.json({
        message:"Hello from problem controller!"
    })
}

function addProblem(req,res,next){
    try {
        throw new UnImplemented("Add Problem not implemented!");
    } catch (error) {
        next(error)
    }
}

function getProblem(req,res){}

function getProblems(req,res){}

function updateProblem(req,res){}

function deleteProblem(req,res){}

module.exports ={
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingPung
}
