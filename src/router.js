const express = require('express');
const router = express.Router();

const usersRouter = require('./usersRouter');
const postsRouter = require('./postsRouter');

router.use('/users', usersRouter);
router.use('/posts', postsRouter);

module.exports = router;