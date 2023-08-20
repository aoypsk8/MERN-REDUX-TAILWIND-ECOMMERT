const express = require('express')
const { registerUser, loginUser } = require('../controllers/userController')
const router = express.Router()

// REGISTER \\

router.post('/registerUser',registerUser)
router.post('/loginUser',loginUser)

module.exports = router