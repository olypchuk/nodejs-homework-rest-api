const bcryptjs=require('bcryptjs')
const { User } = require('../../models/users')
const {requestError} = require('../../helpers')
const signup = async (req, res) => {
    const { email, name, password } = req.body
    
    const user = await User.create({
        email: req.body.email,

        name: req.body.name
    })
    res.status(201).json(user)
}
module.exports=signup