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
    async getProblem(id) {
        try {
            const problem = await this.problemRepositories.getProblem(id);
            return problem;
        } catch (error) {
            throw error;
        }
    }
    async deleteProblem(id) {
        try {
            await this.problemRepositories.deleteProblem(id);
            return;
        } catch (error) {
            throw error;
        }
    }
    async updateProblem(updatedData, id) {
        try {
            if (updatedData.description)
                updatedData.description = markdownSanitized(updatedData.description);
            return await this.problemRepositories.updateProblem(updatedData, id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;
