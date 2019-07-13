const mongoose = require('mongoose')

const connecttionString = 'mongodb+srv://FINANCIE:financie@financie-db-zbljq.mongodb.net/test?retryWrites=true&w=majority'

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connecttionString, { useNewUrlParser: true }, (error) => {
    if (error) return reject(error)
    resolve()
  })
})

module.exports = { connect }
