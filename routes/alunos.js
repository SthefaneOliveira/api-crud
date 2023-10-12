const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno'); 

// Rota para listar todos os alunos
router.get('/', async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.render('listar-alunos', { alunos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para exibir o formulário de adicionar aluno
router.get('/adicionar', (req, res) => {
  res.render('adicionar-aluno');
});

// Rota para criar um novo aluno
router.post('/', async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.redirect('/alunos'); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para exibir as informações de um aluno por ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const aluno = await Aluno.findByPk(id);
    if (aluno) {
      res.render('obter-aluno', { aluno });
    } else {
      res.status(404).json({ message: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar informações de um aluno por ID
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const [rowsUpdated, [updatedAluno]] = await Aluno.update(req.body, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated === 0) {
      res.status(404).json({ message: 'Aluno não encontrado' });
    } else {
      res.status(200).json(updatedAluno);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para excluir um aluno por ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const rowsDeleted = await Aluno.destroy({ where: { id } });
    if (rowsDeleted === 0) {
      res.status(404).json({ message: 'Aluno não encontrado' });
    } else {
      res.status(204).redirect('/alunos'); 
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
