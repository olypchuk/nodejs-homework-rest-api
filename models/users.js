const { Schema, model } = require("mongoose")
const Joi = require('joi');
const { regExp } = require("./REGEXP")
const {handleSaveErrors}=require("../helpers")
const users = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: String,

  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },

}, { versionKey: false, timestamps: true })

const addUser = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(regExp).required(),
  subscription: Joi.string(),
  token: Joi.string(),
  owner:Joi.object({}),
})
const loginUser = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(regExp).required(),
})
const verifyUser = Joi.object({
    email: Joi.string().min(6).required(),
})
const userSchema = {
  addUser,loginUser,verifyUser
}

users.post("save",handleSaveErrors)

const User = model("user", users)

module.exports = {
  User,
  userSchema
}