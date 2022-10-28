const { Schema, model } = require("mongoose")
const Joi = require('joi');
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
  // owner: {
  //     type: Schema.ObjectId,
  //     ref: 'user',
  // }
}, { versionKey: false, timestamps: true })

const userSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string(),
  token: Joi.string(),
  owner:Joi.object({}),
})

const User = model("user", users)

module.exports = {
  User,
  userSchema
}