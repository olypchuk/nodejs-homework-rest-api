const multer  = require('multer')
const path = require("path")
const direction = path.join(__dirname, "../",'./tmp')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,direction)
    },
    filename: function (req, file, cb) { 
        cb(null, file.originalname)
    }
})
const upload = multer({ storage :storage})
module.exports = upload