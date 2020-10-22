// Aqui tu vai criar a conexão com a base de dados

const sql = require('sqlite3').verbose();

class Database {
  conn = "";

  Database(database) { // esse é o constructor do javascript
    this.conn = new sql.Database(); // aqui tu cria a string de conexão
    // e não esquece de usar um if ou try/catch pra saber se conectou
  }
}

module.exports = new Database();