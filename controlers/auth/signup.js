const bcryptjs = require('bcryptjs')

const { User } = require('../../models/users')
const { requestError } = require('../../helpers')
const gravatar = require('gravatar');


const signup = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (result) {
       throw requestError(409,"Email in use")
    }
  const hashPassword = await bcryptjs.hash(password, 10)
  const gra=gravatar.url(email);
  const user = await User.create({ email,  password: hashPassword,avatarURL: gra})

  res.status(201).json({
  "user": { email: user.email, password: user.password,avatarURL:user.avatarURL }
})
    
}
module.exports=signup