const express = require("express")
const router = express.Router()
const { signup,login,current,logout,patchSubscription,updateAvatar } = require("../../controlers/auth")
const { ctrlWrapper } = require("../../helpers")
const { validateBody,authentication } = require("../../middlewars")
const{userSchema}=require("../../models/users")



router.post("/signup", validateBody(userSchema.addUser), ctrlWrapper(signup))
router.post("/login", validateBody(userSchema.loginUser), ctrlWrapper(login))

router.use(authentication)

router.get("/current", ctrlWrapper(current))
router.get("/logout", ctrlWrapper(logout))
router.patch('/', ctrlWrapper(patchSubscription))
router.patch('/avatar', ctrlWrapper(updateAvatar))
module.exports=router