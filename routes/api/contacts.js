const express = require('express')
const router = express.Router()
const Joi = require('joi');
const {listContacts,getContactById,removeContact,addContact,updateContact} = require('../../models/contacts')
const { requestError } = require('../../helpers')

const schema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    phone:Joi.string().required(),
})

router.get('/', async (req, res, next) => {
   try {
        const result = await listContacts();
        res.json(result)
    } catch (error) {
        next(error)
    }
})

router.get('/:contactId', async (req, res, next) => {
try {
  const result = await getContactById(req.params.contactId)
  if (!result) { throw requestError(404,"Not found")}
  res.json(result)
} catch (error) {
  next(error)
}
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body)
    if (error) {
  throw requestError(400,error.message)
   
    }
    const result = await addContact(req.body)
    res.status(201).json(result)
 } catch (error) {
  next(error)
 }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const{contactId}=req.params
    const result = await removeContact(contactId)
    if (!result) {
      throw requestError(404,"Not found")
      }
    res.json( {"message": "contact deleted"})
} catch (error) {
  next(error)
}
})

router.put('/:contactId', async (req, res, next) => {
    try {
    const { error } = schema.validate(req.body)
      if (error) {
      throw requestError(400,error.message)
  
    }
    const{contactId}=req.params
    const result = await updateContact(contactId, req.body)
    if (!result){
    throw requestError(404,"Not found")
    }
    res.json(result)
    return
     
} catch (error) {
  next(error)
}
})

module.exports = router
