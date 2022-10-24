const handleSaveErrors = (err,data,next) => {
    const{name,code}=err
 err.status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    next()
    
}
module.exports=handleSaveErrors;