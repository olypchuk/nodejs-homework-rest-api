const  getAll  = require("./getAll")
const getById = require("./getById")
const add = require("./addContact")
const deleteContact = require("./deleteContact")
const update=require("./updateContact")
module.exports = {
    getAll,
    getById,
    add,
    deleteContact,
    update
}