const { Contact } = require("../models/schema")

const getAll = async (req, res) => {
  const { _id } = req.user
  let {limit=3,page=1,favorite=false}=req.query
  limit = limit > 5 ? 5 : limit
  const skip=(page-1)*limit
  const result = await Contact.find({ owner: _id ,favorite})
    .limit(limit)
    .skip(skip)
    .populate("owner", {  email: true, phone: true })
    // .populate("owner","name phone")
    res.json(result)
}

module.exports = getAll

