const bcryptjs = require('bcryptjs')

const { User } = require('../../models/users')
const { requestError } = require('../../helpers')

const signup = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (result) {
       throw requestError(409,"Email in use")
    }
    const hashPassword = await bcryptjs.hash(password,10)
    const user = await User.create({ email,  password: hashPassword })
   
    // res.status(201).json({ email: user.email, password: user.password })
  res.status(201).json( {
  "user": { email: user.email, password: user.password }
})
    
}
module.exports=signup