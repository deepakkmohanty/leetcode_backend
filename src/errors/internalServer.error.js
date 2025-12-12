const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class InternalServerError extends BaseError{
    constructor(detail){
        super('InternalServerError',StatusCodes.INTERNAL_SERVER_ERROR,'Something went wrong',detail)
    }
}
module.exports = InternalServerError;
