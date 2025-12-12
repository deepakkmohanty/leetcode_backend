const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class UnImplemented extends BaseError{
    constructor(methodName){
        super('UnImplemented',StatusCodes.NOT_IMPLEMENTED,`${methodName} is not implemented`,{})
    }
}
module.exports = UnImplemented;
