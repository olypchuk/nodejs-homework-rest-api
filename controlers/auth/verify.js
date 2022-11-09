const {User}=require('../../models/users')
const { requestError } = require("../../helpers")

const verify = async (req, res) => { 
  const {verificationToken}=req.params
  const user = await User.findOne({ verificationToken })
  if (!user) {
    throw requestError(404, "User not found(")
  }
  await User.findByIdAndUpdate(user._id,{verify:true,verificationToken:null})
  res.json({ message:"Verification successful" })

}
module.exports=verify