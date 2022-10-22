const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, 'contacts.json')
const { nanoid } = require('nanoid')

const rewriteFile = async (contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, 'utf8')
  return JSON.parse(contacts)
}

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  return contacts.find(contact => contact.id === contactId)
}

const removeContact = async (contactId) => {
  const contacts = await listContacts()
  const contact = contacts.find(contact => contact.id === contactId)
  if (contact) {
     contacts.splice(contacts.indexOf(contact), 1)
  }
  await rewriteFile(contacts)
  return contact
}

const addContact = async (body) => {
  const contacts = await listContacts()
  const { name, email, phone } = body
  const newContact = {
    id:nanoid(),
    name,
    email,
    phone,
  }
  contacts.push(newContact)
  await rewriteFile(contacts)
  return newContact
}

const updateContact = async (contactId, body) => { 
  const contacts = await listContacts()
  const index = contacts.findIndex(contact => contact.id === contactId)
  if (index === -1) { 
    return null
  }
  const deletedContact = await removeContact(contactId)
  const newContact = {
    ...deletedContact,
    ...body,
  }
  contacts.splice(index,1,newContact)
  await rewriteFile(contacts)
  return newContact
  }
  
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
