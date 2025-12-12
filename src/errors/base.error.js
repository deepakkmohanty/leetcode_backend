
class BaseError extends Error{
    constructor(name,statusCode,message,detail){
        super(message);
        this.name= name;
        this.statusCode = statusCode;
        this.detail = detail;
    }
}

module.exports= BaseError;
