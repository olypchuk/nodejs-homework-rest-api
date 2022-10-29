const express = require("express")
const router = express.Router()
const { signup,login } = require("../../controlers/auth")
const { ctrlWrapper } = require("../../helpers")
const { validateBody } = require("../../middlewars")
const{userSchema}=require("../../models/users")

router.post("/signup", validateBody(userSchema.addUser), ctrlWrapper(signup))
router.post("/login",ctrlWrapper(login))

module.exports=router