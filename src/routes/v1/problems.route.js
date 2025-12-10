const express = require('express')
const {problemController} = require('../../controller')
const problemRoute = express.Router();

problemRoute.get('/ping',problemController.pingPung)
problemRoute.get('/:id',problemController.getProblem);
problemRoute.get('/',problemController.getProblems);
problemRoute.post('/',problemController.addProblem);
problemRoute.put('/:id',problemController.updateProblem);
problemRoute.delete('/:id',problemController.deleteProblem)

module.exports = problemRoute;
