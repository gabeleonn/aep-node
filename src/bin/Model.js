// aqui tu vai criar uma classe chamada modelo, e esse modelo
//vai ser uma classe base para todas as outras classes que vão
//ser modelos, vai ter algumas funções básicas tipo encontrar todos,
// encontrar por id, alterar, criar e deletar.

class Model {

  db = "" // aqui vai ficar aquela classe da base da dados pra poder
  //criar as consultas

  model = ""  // aqui vai ficar o nome do modelo que está na base de dados

  findAll() {// encontra todos
   //aqui tu cria a lógica pra essa consulta 
  } 

  findById(id) { // encontra um por id
    //aqui tu cria a lógica pra essa consulta 
  } 

  save(newObject) { // salva um novo objeto na base de dados
     //aqui tu cria a lógica pra essa consulta
  }

  put(newObject) {// altera um objeto que está na base de dados
     //aqui tu cria a lógica pra essa consulta
  } 

  delete(id) {// deleta um objeto da base por id
    //aqui tu cria a lógica pra essa consulta
  } 
}

module.exports = Model;