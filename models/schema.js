
const { Schema, model } = require("mongoose")
const Joi = require('joi');


const regExp =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
    favourite: {
        type: Boolean,
        default:false
    },

}, { versionKey: false, timestamps: true }
)

const Contact = model('contact', contactsSchema)

const addSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    phone: Joi.string().required(),
    favourite:Joi.boolean()
})
const updateFavouriteSchema = Joi.object({
    favourite: Joi.boolean().required()
})
const schema={addSchema, updateFavouriteSchema}


module.exports = {
Contact,
schema
}