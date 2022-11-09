const  signup  = require('./signup')
const login = require('./login')
const current= require('./current')
const logout = require('./logout')
const patchSubscription = require('./patchSubscription')
const updateAvatar = require('./updateAvatar')
const verify = require('./verify')
const resendEmail = require('./resendEmail')
module.exports = {
    signup,login,current,logout,patchSubscription,updateAvatar,verify,resendEmail
}