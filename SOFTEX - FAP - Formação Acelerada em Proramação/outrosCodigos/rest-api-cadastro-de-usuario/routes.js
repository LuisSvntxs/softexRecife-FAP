// routes.js
const express = require('express');
const router = express.Router();
const User = require('./models/user'); // Importe o modelo de usuário

// Rota POST para criar um novo usuário
router.post('/users', async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const user = await User.create({ nome, email, idade });
    res.json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota GET para listar todos os usuários
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
});

// Rota PUT para atualizar um usuário pelo ID
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedRows] = await User.update(req.body, { where: { id } });
    if (updatedRows > 0) {
      const updatedUser = await User.findByPk(id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// Rota DELETE para excluir um usuário pelo ID
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await User.destroy({ where: { id } });
    if (deletedRowCount > 0) {
      res.json({ message: 'Usuário excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
});

module.exports = router;
