const bcrypt=require('bcryptjs');

const { User } = require('../../models/users')
const { requestError } = require('../../helpers')

const login = async (req, res, next) => { 
    const { email ,password} = req.body
    const theSameUser = await User.findOne({ email})
    if (!theSameUser) {
        throw requestError(401, "Not authorized")
    }





}
module.exports=login