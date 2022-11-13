const {BASE_URL} = process.env

const createVerifyEmail = (email,verificationToken) => {
  const msg = {
  to:email, 
  from: 'olypchuk@meta.ua', 
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">click for verify acc</a>`,
  }
  return msg
}
module.exports =createVerifyEmail