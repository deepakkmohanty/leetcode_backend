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

function getProblem(req, res) {}

function getProblems(req, res) {}

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
