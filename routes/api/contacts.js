const express = require('express')
const router = express.Router()
const { getAll,getById ,add,deleteContact,update,patchContact} = require('../../controlers')
const { ctrlWrapper} = require('../../helpers')
const {isValidId,validateBody,authentication}=require('../../middlewars')
const {schema} = require('../../models/schema')



router.get('/', authentication,ctrlWrapper(getAll));
router.get('/:contactId',authentication, isValidId, ctrlWrapper(getById))
router.post('/',authentication,validateBody(schema.addSchema),ctrlWrapper(add))
router.delete('/:contactId', isValidId,authentication,ctrlWrapper(deleteContact))
router.put('/:contactId',isValidId,authentication,validateBody(schema.addSchema),ctrlWrapper(update))
router.patch('/:contactId/favorite', isValidId,authentication,validateBody(schema.updatefavoriteSchema),ctrlWrapper(patchContact))
module.exports = router
