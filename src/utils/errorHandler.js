const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");

function errorHandler(err,req,res,next){
    if(err instanceof BaseError){
        return res.statusCode(err.statusCode).json({
            success:false,
            message:err.message,
            error:err.detail,
            data:{}
        })
    }

    return res.statusCode(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:"Something went wrong",
        error:err,
        data:{}
    })
}
module.exports = errorHandler;
