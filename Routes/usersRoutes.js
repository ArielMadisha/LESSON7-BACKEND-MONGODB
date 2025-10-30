const express = require('express')
const { createUser } = require('../Controller/usersController')

const route = express.Router()

route.post('/', createUser)

module.exports = route