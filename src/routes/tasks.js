const express = require('express');
const store = require('../store');

const VALID_STATUSES = ['pending', 'in-progress', 'completed'];

const router = express.Router();

router.get('/', (req, res) => {
  res.json(store.getAll());
});

router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'title is required and must be a string' });
  }

  const task = store.create({ title, description });
  res.status(201).json(task);
});

router.patch('/:id', (req, res) => {
  const { status } = req.body;

  if (!status || !VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(', ')}` });
  }

  const task = store.updateStatus(req.params.id, status);

  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }

  res.json(task);
});

router.delete('/:id', (req, res) => {
  const deleted = store.remove(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: 'task not found' });
  }

  res.status(204).send();
});

module.exports = router;
