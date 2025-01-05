class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = statusCode >= 200 && statusCode < 400;
    }
}

export default ApiError;