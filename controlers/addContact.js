const { requestError } = require("../helpers")
const {Contact,schema}= require("../models/schema")


const add = async (req, res) => {
  //     const { error } = schema.validate(req.body)
  //   if (error) {
  // throw requestError(400,error.message)
   
  //   }
    const result = await Contact.create(req.body)
    res.status(201).json(result)

}
module.exports =add