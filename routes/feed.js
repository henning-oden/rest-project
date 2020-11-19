const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const feedsController = require('../controllers/feed');

// GET /feed/posts
router.get('/posts', feedsController.getPosts);

router.post(
  '/post',
  [
    body('title').trim().isLength({ min: 7 }),
    body('content').trim().isLength({ min: 5 }),
  ],
  feedsController.createPost
);

router.get('/post/:postId', feedsController.getPost);

module.exports = router;
