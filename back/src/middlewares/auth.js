const user = require('../usecases/user')

const auth = (req, res, next) => {
  try {
    console.log(req.headers)
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: 'token required',
      error: 'authorization header required'
    })
  }
}

module.exports = auth
