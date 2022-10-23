const express = require('express')
const router = express.Router()
const { getAll,getById ,add,deleteContact,update,patchContact} = require('../../controlers')
const { ctrlWrapper} = require('../../helpers')
const {isValidId,validateBody}=require('../../middlewars')
const {schema} = require('../../models/schema')

router.get('/', ctrlWrapper(getAll));
router.get('/:contactId', isValidId, ctrlWrapper(getById))
router.post('/',validateBody(schema.addSchema),ctrlWrapper(add))
router.delete('/:contactId', isValidId,ctrlWrapper(deleteContact))
router.put('/:contactId',isValidId,validateBody(schema.addSchema),ctrlWrapper(update))
router.patch('/:contactId/favorite', isValidId,validateBody(schema.updatefavoriteSchema),ctrlWrapper(patchContact))
module.exports = router
