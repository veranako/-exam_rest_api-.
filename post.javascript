const express = require('express');
const router = express.Router();

// User resource
let users = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' },
  { id: 3, username: 'user3', password: 'pass3' }
];

// User resource endpoints
router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) res.status(404).send('User not found.');
  res.send(user);
});

router.post('/', (req, res) => {
  const user = { id: users.length + 1, username: req.body.username, password: req.body.password };
  users.push(user);
  res.send(user);
});

router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) res.status(404).send('User not found.');
  user.username = req.body.username;
  user.password = req.body.password;
  res.send(user);
});

router.delete('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) res.status(404).send('User not found.');
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

module.exports = router;
