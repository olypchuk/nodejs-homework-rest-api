const express = require("express")
const router = express.Router()
const { signup,login,current,logout,patchSubscription,updateAvatar ,verify,resendEmail} = require("../../controlers/auth")
const { ctrlWrapper } = require("../../helpers")
const { validateBody,authentication ,upload} = require("../../middlewars")
const{userSchema}=require("../../models/users")

router.post("/signup", validateBody(userSchema.addUser), ctrlWrapper(signup))
router.post("/login", validateBody(userSchema.loginUser), ctrlWrapper(login))
router.get('/verify/:verificationToken', ctrlWrapper(verify))
router.post('/verify',validateBody(userSchema.verifyUser), ctrlWrapper(resendEmail))

router.use(authentication)

router.get("/current", ctrlWrapper(current))
router.get("/logout", ctrlWrapper(logout))
router.patch('/', ctrlWrapper(patchSubscription))
router.patch('/avatars', upload.single('avatar'), ctrlWrapper(updateAvatar))
module.exports=router