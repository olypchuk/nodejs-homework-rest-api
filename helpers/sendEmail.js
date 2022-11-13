const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENGRID_API_KEY)

const sendEmail = async (data) => {
    await sgMail.send({ ...data, from: 'olypchuk@meta.ua' })
    
 }
module.exports=sendEmail