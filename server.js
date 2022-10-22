
const mongoose = require('mongoose')

const app = require('./app')
const {DB_HOST, PORT=3000}=process.env

mongoose.connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful')
    app.listen(PORT, () => {

      console.log(`Server running. Use our API on port: "${PORT}"`)
    })
  })
  .catch (error=> {
      console.log('error :>> ', error)
   
process.exit(1)
  })


// 'mongodb+srv://alexander:alexander@cluster0.updul34.mongodb.net/?retryWrites=true&w=majority'