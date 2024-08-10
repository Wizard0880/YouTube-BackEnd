const asyncHandler = (requestHandler) => {
    (res,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}
export  {asyncHandler};

// Try and Catch method

// const asyncHandler = (fn) => async (req,res,next) =>{
//     try {
//        await finally(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }