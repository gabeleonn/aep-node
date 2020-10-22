const UserService = require('./UserService');

class UserController {

  userService = UserService;

  getAllUsers(req, res) {
    return res.send(this.userService.findAll());
  }

  getUserById(req, res) {
    let id = req.params.id;
    return res.send(this.userService.findById(id));
  }

  saveNewUser(req, res) {
    return res.send(this.userService.save("new user"));
  }

  updateUser(req, res) {
    return res.send(this.userService.update("update user"));
  }

  deleteUser(req, res) {
    let id = req.params.id;
    return res.send(this.userService.delete(id));
  }
}

module.exports = new UserController();