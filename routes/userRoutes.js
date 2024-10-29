const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Rotas para gerenciar usuários
router.get('/', userController.getAllUsers); // Renderiza a lista de usuários
router.get('/search', userController.searchUsers); // Rota de busca de usuários
router.get('/new', userController.renderCreateForm); // Rota para o formulário de criação
router.post('/', userController.createUser); // Criação de um novo usuário
router.get('/:id', userController.getUserById); // Obter detalhes do usuário
router.get('/:id/edit', userController.renderEditForm); // Rota para o formulário de edição
router.put('/:id', userController.updateUser); // Atualização do usuário
router.delete('/:id', userController.deleteUser); // Exclusão do usuário

module.exports = router;
