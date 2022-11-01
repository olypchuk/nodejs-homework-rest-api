const jwt = require("jsonwebtoken")
const { requestError } = require("../helpers")
const { User } = require("../models/users")
const { SECRET_KEY } = process.env

const authentication = async (req, res, next) => {
    try {
        const { authorization = "" } = req.headers
        const token = authorization.split(" ")[1]
        if (!token) throw requestError(401)
        const { id } = jwt.verify(token, SECRET_KEY)
        const user = await User.findByIdAndUpdate(id,{token})
       
        if (!user || user.token !== token) throw requestError(401)

        req.user = user

        next()
    } catch (error) {
        if (!error.status) {
            error.status = 401
        }
        next(error)
        // res.json(error)
        // throw requestError(401, "not authorized")
    }
}
module.exports = authentication;