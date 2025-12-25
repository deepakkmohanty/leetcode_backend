const { ProblemModel } = require('../models');

class ProblemRepositories {
    async createProblem(problemData) {
        try {
            const problem = await ProblemModel.create({
                title: problemData.title,
                description: problemData.description,
                testcases: problemData.testcases ? problemData.testcases : [],
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllProblems() {
        try {
            const problems = await ProblemModel.find({});
            return problems;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProblemRepositories;
