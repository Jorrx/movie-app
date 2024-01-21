import { ApiError } from '../exeptions/apiError.js';

export function errorMiddleware(err, req, res, next) {
    console.log('err instanceof ApiError' ,err );

    if (err instanceof ApiError) {
        console.log(err.errors , '<<<:::Errors:err.errors')
        return res.status(err.status).json({
            message: err.message,
            errors:err.errors
        });
    }

    return res.status(500).json({
        message: 'Unspecified error',
        errors:err.errors
    });
}