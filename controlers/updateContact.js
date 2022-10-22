const {requestError}= require("../helpers")
const schema = require("../models/schema")
const {updateContact}=require("../models/contacts")


const update = async (req, res, next) => {
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
  }
module.exports=update