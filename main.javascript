const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing request bodies
app.use(express.json());

// Import resource routes
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

// Use resource routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// Start server
app.listen(port, () => console.log(`Listening on port ${port}...`));
