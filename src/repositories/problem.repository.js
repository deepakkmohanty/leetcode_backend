const NotFound = require('../errors/notFound.error');
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
    async getProblem(id) {
        try {
            const problem = await ProblemModel.findById(id);
            if (!problem) {
                throw new NotFound('Problem', id);
            }
            return problem;
        } catch (error) {
            throw error;
        }
    }
    async deleteProblem(id) {
        try {
            const problem = await ProblemModel.findByIdAndDelete({ _id: id });
            if (!problem) {
                throw new NotFound('Problem', id);
            }
            return;
        } catch (error) {
            throw error;
        }
    }
    async updateProblem(updatedData, id) {
        try {
            const problem = await ProblemModel.findByIdAndUpdate(
                id,
                { $set: updatedData },
                { new: true }
            );

            if (!problem) {
                throw new NotFound('Problem', id);
            }
            return problem;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

module.exports = ProblemRepositories;
