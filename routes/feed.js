const express = require("express");

const router = express.Router();

const feedsController = require("../controllers/feed");

// GET /feed/posts
router.get("/posts", feedsController.getPosts);

module.exports = router;