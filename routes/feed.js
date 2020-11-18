const express = require("express");

const router = express.Router();

const feedsController = require("../controllers/feed");

// GET /feed/posts
router.get("/posts", feedsController.getPosts);

router.post('/post', feedsController.createPost);

module.exports = router;