const { requestError } = require("../helpers")
const {Contact}=require("../models/schema")
const patchContact = async (req, res, next) => {
    const{contactId}=req.params
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    if (!result) {
        throw requestError(400,"missing field favorite")
    }
    res.json(result)
 }
module.exports=patchContact