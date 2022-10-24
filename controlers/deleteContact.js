const { requestError } = require("../helpers")
const {Contact}= require("../models/schema")
const deleteContact = async (req, res, next) => {
  
    const{contactId}=req.params
  const result = await Contact.findByIdAndDelete(contactId)
    if (!result) {
      throw requestError(404,"Not found")
      }
    res.json( {"message": "contact deleted"})

}
module.exports =deleteContact