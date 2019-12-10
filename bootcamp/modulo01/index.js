const express = require('express');
const server = express();

server.use(express.json());
const users = ['Diego', 'Otavio', 'Victor'];

// Middleware 
// GLOBAL
server.use((req, res, next) => { 
  console.time('Request');
  console.log(`Request: ${req.method}; URL: ${req.url}`);
  next()

  console.timeEnd('Request')

})

// Valida se NAME está no json de entrada (valido para os metodos POST e PUT)
function checkUserExists(req, res, next ){ 

  if (!req.body.name) { 
    return res.status(400).json({error: 'Name is required'});
  }

  return next();
}

// Verifica se o index existe no array
function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) { 

    return res.status(400).json({error: 'User does not exists'})

  }
  return next();

}

// Listar 1 usuário
server.get('/users/:index', checkUserInArray, (req, res) => {
  const {index} = req.params
  res.send(users[index]);  
})

// Listar todos os usuários
server.get('/users/', checkUserInArray, (req, res) => {
  return res.json(users);  
})

// Incluir Usuário
server.post('/users/', checkUserExists, (req, res) => {
  const {name} = req.body;
  users.push(name);

  return res.json(users);
})

// Alterar Usuário
server.put('/users/:index', checkUserExists, checkUserInArray,  (req, res) => {
  const {index} = req.params 
  const {name} = req.body;

  users[index] = name
  return res.json(users);

})

/// Deletar Usuário 
server.delete('/users/:index', checkUserInArray, (req, res) => { 
  const {index} = req.params;
  users.splice(index, 1);
  
  return res.json(users);

})

server.listen(3000);



