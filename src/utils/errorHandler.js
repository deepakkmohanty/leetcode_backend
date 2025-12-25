const { StatusCodes } = require('http-status-codes');
const BaseError = require('../errors/base.error');

function errorHandler(err, req, res, next) {
    console.error('🔥 ERROR STACK:', err);

    // Custom application errors
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.detail || null,
            data: {},
        });
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: err.message,
            error: err.errors,
            data: {},
        });
    }

    // Invalid ObjectId
    if (err.name === 'CastError') {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Invalid ID format',
            error: err.message,
            data: {},
        });
    }

    // Unknown / programming errors
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err.stack,
        data: {},
    });
}

module.exports = errorHandler;
