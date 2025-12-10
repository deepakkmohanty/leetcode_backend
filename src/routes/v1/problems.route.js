const express = require('express')
const {ProblemController} = require('../../controller')
const problemRoute = express.Router();

problemRoute.get('/ping',ProblemController.pingPung)
problemRoute.get('/:id',ProblemController.getProblem);
problemRoute.get('/',ProblemController.getProblems);
problemRoute.post('/',ProblemController.addProblem);
problemRoute.put('/:id',ProblemController.updateProblem);
problemRoute.delete('/:id',ProblemController.deleteProblem)

module.exports = problemRoute;
