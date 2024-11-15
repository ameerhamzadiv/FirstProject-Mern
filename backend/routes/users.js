const express = require('express');
const { GetAllUser, GetSingleUser, CreateUser, DeleteUser, UpdateUser } = require('../controllers/userController');


const router = express.Router();

// Get all Users
router.get('/get/all', GetAllUser);

// Get Single User
router.get('/:id', GetSingleUser);

// Post/Add User
router.post('/add', CreateUser);

// Delete User
router.delete('/delete/:id', DeleteUser)

// Update User
router.patch('/:id', UpdateUser)




module.exports = router;