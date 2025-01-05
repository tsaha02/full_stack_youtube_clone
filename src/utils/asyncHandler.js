// const asyncHandler = (func) => async (req, res, next) => {
//     try {await func(req, res, next) }
//     catch (error) {
//         res.status(error.code || 500).json({
//             message: error.message || "An unknown error occurred!",
//             success: false
//         },
//         )
//     }
// }

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(
            requestHandler(req, res, next)
        ).catch((error) => next(error));
    }
}


export default asyncHandler;