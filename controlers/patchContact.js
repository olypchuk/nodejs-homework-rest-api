const { requestError } = require("../helpers")
const { Contact } = require("../models/schema")

const patchContact = async (req, res, next) => {
    const { contactId } = req.params
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })

    if (!result) {
        throw requestError(404, `Not found contact with id: ${contactId}`)
    }
    res.json(result)
 }
module.exports=patchContact