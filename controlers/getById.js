const{Contact}=require("../models/schema")
const { requestError } = require("../helpers")

const getById = async (req, res) => {
  const {contactId}=req.params
  const result = await Contact.findById(contactId, "-createdAt -updatedAt")
  if (!result) {
    throw requestError(404, "Not found")
  }
  res.json(result)

}

module.exports=getById