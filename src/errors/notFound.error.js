const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(resourceName, resourceId) {
        super(
            'NotFound',
            StatusCodes.NOT_FOUND,
            `The requested resource: ${resourceName} with value ${resourceId} not found`,
            {
                resourceName,
                resourceId,
            }
        );
    }
}

module.exports = NotFound;
