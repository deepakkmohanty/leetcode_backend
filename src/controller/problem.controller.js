const { ProblemService } = require('../services');
const { ProblemRepositories } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepositories());

function pingPung(req, res) {
    return res.json({
        message: 'Hello from problem controller!',
    });
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Created problem successfully.',
            error: {},
            data: newProblem,
        });
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        console.log('Params id', req.params.id);
        const response = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetch the problem.',
            data: response,
            error: {},
        });
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            data: response,
            error: {},
        });
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {}

function deleteProblem(req, res) {}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingPung,
};
