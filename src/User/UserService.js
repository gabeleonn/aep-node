const User = require('./User');

class UserService {

  User = User;

  findAll () {
    return "Usuarios";
  }

  findById(id) {
    return `Usuario (${id})`;
  }

  save(user) {
    return user;
  }

  update(user) {
    return user;
  }

  delete(id) {
    return `delete (${id})`;
  }
  
}

module.exports = new UserService();