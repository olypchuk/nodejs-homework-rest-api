const { User } = require('../../models/users')
const { requestError ,sendEmail,createVerifyEmail} = require('../../helpers')
const resendEmail = async (req,res) => {
    const { email } =req.body
    const user = await User.findOne({ email })
    if (!user) {
        throw requestError(404,"User not found")
    }
    if (user.verify) {
        throw requestError(400,'Verification has already been passed')
    }
    await sendEmail(createVerifyEmail(email,user.verificationToken))
    res.status(200).json({
       message: "Verification email sent"
    })

}
module.exports=resendEmail