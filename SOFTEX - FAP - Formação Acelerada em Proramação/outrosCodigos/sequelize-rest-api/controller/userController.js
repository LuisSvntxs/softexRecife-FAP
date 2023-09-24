//const express = require('express');
const { Router } = require('express');
const { User } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users)
}).catch((e) => {
    console.log(e.message);
    res.status(500).json({ message: 'error' })
});
router.get('/:id', async (req, res) => {
    const users = await User.findByPk(req.params.id);
    res.status(200).json(users)
}).catch((e) => {
    console.log(e.message);
    res.status(500).json({ message: 'error' })
});

router.post('/', async (req, res) => {
    const { nome, email, idade } = req.body;
    const newUsers = User.create(nome, email, idade);
    res.status(200).json({message: 'Usuário cadastrado com sucesso!'})
}).catch((e) => {
        console.log(e.message);
        res.status(500).json({ message: 'error' })
});

router.delete('/:id', async (req, res) => {
    const users = await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({message: 'Usuário excluido com sucesso!'})
})

router.put('/:id', async (req, res) => {
    const { nome, email, idade } = req.body;
    const users = await User.update(nome, email, idade, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({message: 'Usuário atualizado com sucesso!'})
})

module.exports = router;