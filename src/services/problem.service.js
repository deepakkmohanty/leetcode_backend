const { StatusCodes } = require('http-status-codes');
const { markdownSanitized } = require('../utils');

class ProblemService {
    constructor(problemRepositories) {
        this.problemRepositories = problemRepositories;
    }

    async createProblem(problemData) {
        try {
            // sanitize problem description data
            problemData.description = markdownSanitized(problemData.description);
            const problem = await this.problemRepositories.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllProblems() {
        try {
            const problems = await this.problemRepositories.getAllProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProblemService;
