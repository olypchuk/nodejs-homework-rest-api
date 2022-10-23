const { isValidObjectId } = require('mongoose')
const { requestError } = require('../helpers')

const isValidId = (req,res,next) => {
    const { contactId } = req.params
    const result = isValidObjectId(contactId)
    if (!result) {
        next(requestError(400, 'Invalid format id'))
    }
    next()
    
}
module.exports = isValidId