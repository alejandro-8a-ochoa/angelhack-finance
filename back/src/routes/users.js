const express = require('express')

const user = require('../usecases/user')
const router = express.Router()

router.use(express.json())

router.post('/', async (req, res) => {
  try {
    const newUserData = req.body
    const newUser = await user.signUp(newUserData)
    res.json({
      success: true,
      message: 'User createds successfully',
      payload: {
        user: newUser
      }
    })
  } catch (error) {
    console.error('error: ', error)
    res.status = 400
    res.json({
      success: false,
      message: 'cannot create user',
      error: error.message
    })
  }
})

router.post('/auth', async (req, res) => {
  try {
    const {
      password,
      email
    } = req.body
    const token = await user.logIn(email, password)
    res.json({
      seccess: true,
      message: 'inicio de sesion exitoso',
      payload: {
        token
      }
    })
  } catch (error) {
    console.error('error: ', error)
    res.status = 401
    res.json({
      success: false,
      message: 'credenciales incorrectas',
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteUser = await user.deleteById(id)
    res.json({
      success: true,
      message: 'Usuario eliminado',
      payload: {
        deleteUser
      }
    })
  } catch (error) {
    console.error('error: ', error)
    res.status = 400
    res.json({
      success: false,
      message: 'Usuario no eliminado',
      error: error.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newUserData = req.body
    const updateUser = await user.updateById(id, newUserData)
    res.json({
      success: true,
      massege: 'Informacion del usuario actualizada con exito',
      payload: {
        updateUser
      }
    })
  } catch (error) {
    console.error('error: ', error)
    res.status = 400
    res.json({
      success: false,
      message: 'Error en las actualizacion de la informacion',
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const users = await user.getAll()
    res.json({
      succes: true,
      message: 'todos los usuarios obtenidos',
      payload: {
        users
      }
    })
  } catch (error) {
    console.error('error: ', error)
    res.status = 400
    res.json({
      success: false,
      message: 'Error al obtener usuarios',
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundUser = await user.getById(id)
    res.json({
      message: 'usuario encontrado',
      success: true,
      payload: {
        foundUser
      }
    })
  } catch (error) {
    console.log('error: ', error)
    res.status = 400
    res.json({
      success: false,
      message: 'error al encontrar usuario',
      error: error.massege
    })
  }
})

module.exports = router
