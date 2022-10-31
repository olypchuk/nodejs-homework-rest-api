const { Schema, model } = require("mongoose")
const Joi = require('joi');
const {handleSaveErrors}= require("../helpers")
const {regExp} = require("./REGEXP")

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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    //   required: true
    }
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