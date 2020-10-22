const { Router } = require('express');

const router = new Router();

const userController = require('./UserController');

router.get('/', (req, res) => {
  userController.getAllUsers(req, res);
});

router.get('/:id', (req, res) => {
  userController.getUserById(req, res);
});

router.post('/', (req, res) => {
  userController.saveNewUser(req, res);
});

router.patch('/', (req, res) => {
  userController.updateUser(req, res);
});

router.delete('/:id', (req, res) => {
  userController.deleteUser(req, res);
});



module.exports = router;
