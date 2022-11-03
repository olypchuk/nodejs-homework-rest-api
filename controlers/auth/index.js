const  signup  = require('./signup')
const login = require('./login')
const current= require('./current')
const logout = require('./logout')
const patchSubscription = require('./patchSubscription')
const updateAvatar= require('./updateAvatar')
module.exports = {
    signup,login,current,logout,patchSubscription,updateAvatar
}