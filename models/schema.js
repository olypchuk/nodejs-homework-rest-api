const { Schema, model } = require("mongoose")
const Joi = require('joi');
const {handleSaveErrors}= require("../helpers")
const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const contactsSchema = new Schema({
    name: {
        type: String,
      required:true
    },
    email: {
        type: String,
      required:true,
        unique: true,
        match:regExp
    },
    phone: {
        type: String,
        required:true
    },
    favorite: {
        type: Boolean,
        default:false
    },

}, { versionKey: false, timestamps: true }
)

contactsSchema.post("save",handleSaveErrors)
const Contact = model('contact', contactsSchema)

const addSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required':"name is so important"
    }),
    email:Joi.string().required(),
    phone: Joi.string().required(),
    favorite:Joi.boolean()
})
const updatefavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})
const schema={addSchema, updatefavoriteSchema}


module.exports = {
Contact,
schema
}