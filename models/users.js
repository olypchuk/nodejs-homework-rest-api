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
const userSchema = {
  addUser,loginUser
}

users.post("save",handleSaveErrors)

const User = model("user", users)

module.exports = {
  User,
  userSchema
}