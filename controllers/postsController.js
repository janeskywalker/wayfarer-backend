
const db = require('../models');

// creating post for a city
const createPost = (req, res) => {
    const cityId = req.body.cityId

    const newPost = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        City: cityId,
      }

    db.Post.create(newPost, (err, savedPost) => {
        console.log('creating new post')
        if (err) return res.status(500).json({ status: 500, message: err});
        res.send(savedPost)
    });

}

module.exports = {
  createPost
};
