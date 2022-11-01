const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY }=process.env
const { User } = require('../../models/users')
const { requestError } = require('../../helpers')


const login = async (req, res, next) => {
    const { email, password } = req.body
 
    const theSameUser = await User.findOne({ email })
    if (!theSameUser) {
        throw requestError(401, "Email or password is wrong")
    }
    const checkPassword = await bcrypt.compare(password, theSameUser.password)
    if (!checkPassword) {
        throw requestError(401, "Email or password is wrong")
    }
    const payload = {
        id: theSameUser._id,
        email: theSameUser.email,
    }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" })
    await User.findByIdAndUpdate(payload.id,{token})
    res.status(200).json({
        token, "user": {
            email: theSameUser.email,
            subscription: "starter"
    }})
}
module.exports=login