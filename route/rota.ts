const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// criar um novo aluno
router.post('/', async (req, res) => {
  try {
    const { name, matriculation, grades } = req.body;
    const newStudent = await Student.create({ name, matriculation, grades });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar aluno', error });
  }
});

// listar todos os alunos
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error });
  }
});

// atualizar as informações de um aluno
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar aluno', error });
  }
});

// excluir um aluno
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: 'Aluno excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir aluno', error });
  }
});

module.exports = router;
