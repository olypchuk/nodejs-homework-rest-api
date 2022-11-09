const bcryptjs = require('bcryptjs')
const gravatar = require('gravatar');
const { nanoid } = require('nanoid')
const { User } = require('../../models/users')
const { requestError ,sendEmail,createVerifyEmail} = require('../../helpers')

const signup = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (result) {
        throw requestError(409,"Email in use")
    }
    const hashPassword = await bcryptjs.hash(password, 10)
    const gra = gravatar.url(email);
    const verificationToken = nanoid()
    const user = await User.create({ email, password: hashPassword, avatarURL: gra, verificationToken })
    const mail=createVerifyEmail(email,verificationToken)
    await sendEmail(mail)
    .then(() => {
    console.log('Email sent')
    })
    .catch((error) => {
    console.error(error)
    })

    res.status(201).json({
    "user": { email: user.email, password: user.password,avatarURL:user.avatarURL}
    })

}
module.exports=signup