const { isValidObjectId } = require('mongoose')
const { requestError } = require('../helpers')

const isValidId = (req,res,next) => {
    const { contactId } = req.params
    // console.log('req.params :>> ', req.params);
    console.log('contactId :>> ', contactId);
    const result = isValidObjectId(contactId)
    if (!result) {
        next(requestError(400, 'Invalid format id'))
    }
    next()
    
}
module.exports = isValidId