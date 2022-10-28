const express = require("express")
const router = express.Router()
const { signup } = require("../../controlers/auth")
const { ctrlWrapper } = require("../../helpers")
const { validateBody } = require("../../middlewars")
const{userSchema}=require("../../models/users")

router.post("/signup", validateBody(userSchema), ctrlWrapper(signup))


module.exports=router