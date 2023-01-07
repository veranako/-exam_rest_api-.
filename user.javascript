const express = require('express');
const router = express.Router();

// Post resource
const posts = [
  { id: 1, title: 'Post 1', content: 'Content of post 1' },
  { id: 2, title: 'Post 2', content: 'Content of post 2' },
  { id: 3, title: 'Post 3
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) res.status(404).send('Post not found.');
  res.send(post);
});

router.post('/', (req, res) => {
  const post = { id: posts.length + 1, title: req.body.title, content: req.body.content };
  posts.push(post);
  res.send(post);
});

router.put('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) res.status(404).send('Post not found.');
  post.title = req.body.title;
  post.content = req.body.content;
  res.send(post);
});

router.delete('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) res.status(404).send('Post not found.');
  const index = posts.indexOf(post);
  posts.splice(index, 1);
  res.send(post);
});

module.exports = router;
