const Jimp= require("jimp")
const { User } = require("../../models/users")
const fs = require('fs/promises')
const path = require("path")
const tmpDirection = path.join(process.cwd(), "tmp")
const finalFolder=path.join(process.cwd(),"public","avatars")
const updateAvatar = async (req, res, next) => {
    const { _id } = req.user
    const { path: tmpPath, originalname } = req.file
    const extension = originalname.split(".").pop()
    const updatedFileName =`${_id}.${extension}`
    const fileName = path.join(tmpDirection, originalname)
    const avatarUrl=path.join(finalFolder, updatedFileName)

    const file = await Jimp.read(tmpPath)
    await file.resize(250,250).write(fileName)
 
    await fs.rename(fileName, avatarUrl)
    await User.findByIdAndUpdate(_id,{avatarUrl})
    res.json({ avatarUrl })

}

module.exports=updateAvatar