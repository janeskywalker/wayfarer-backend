const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// create a post, request body need a city id, url params are usually for get request 
router.post('/', authRequired, ctrl.posts.createPost)

// delete a post
router.delete('/:id', authRequired, ctrl.posts.deletePost)

// post index -- get all post
router.get('/userposts/:userId', authRequired, ctrl.posts.userPosts)



module.exports = router;
