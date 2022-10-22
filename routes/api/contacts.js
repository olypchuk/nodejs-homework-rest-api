const express = require('express')
const router = express.Router()
const { getAll,getById ,add,deleteContact,update} = require('../../controlers')
const { ctrlWrapper} = require('../../helpers')
const {isValidId}=require('../../middlewars')

router.get('/', ctrlWrapper(getAll));
router.get('/:contactId', isValidId, ctrlWrapper(getById))



router.post('/', ctrlWrapper(add))
router.delete('/:contactId', ctrlWrapper(deleteContact))
router.put('/:contactId',ctrlWrapper(update))

module.exports = router
