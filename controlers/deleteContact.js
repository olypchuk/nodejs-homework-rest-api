const { requestError } = require("../helpers")
const { removeContact } = require("../models/contacts")

const deleteContact = async (req, res, next) => {
  
    const{contactId}=req.params
    const result = await removeContact(contactId)
    if (!result) {
      throw requestError(404,"Not found")
      }
    res.json( {"message": "contact deleted"})

}
module.exports =deleteContact