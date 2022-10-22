const ctrlWrapper = ctrl => {
    // ctrl це функція типу гет ол і тд ітп

    const iife = async (res, req, next) => {
        try {
await ctrl(res,req, next)
        }
        catch (err){
            next(err)
        }
    }
    return iife
}
module.exports=ctrlWrapper