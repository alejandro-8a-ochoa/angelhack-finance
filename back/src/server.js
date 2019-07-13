const express = require('express')

const userRouter= require('./routes/users')

const app= express()
const port = 8081

app.use(express.json())
app.use('/users', userRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'finance'
  })
})

module.exports={
  server : app,
  port
}