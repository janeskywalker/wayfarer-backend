
const db = require('../models');

// creating post for a city
const createPost = (req, res) => {
    const cityId = req.body.cityId

    const newPost = {
        title: req.body.title,
        User: req.session.currentUser.id,
        content: req.body.content,
        City: cityId,
      }

    db.Post.create(newPost, (err, savedPost) => {
        console.log('creating new post')
        if (err) return res.status(500).json({ status: 500, message: err});
        res.send(savedPost)
    });
}

const deletePost = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) =>{
        console.log('deleting post')
        if (err) return res.status(500).json({ status: 500, message: err});
        res.send(deletedPost)
    })

} 

const userPosts = (req, res) => {
    console.log('getting user post')
    db.Post.find({User: req.params.userId}, (error, foundPosts) => {
        if (error) return response.sendErrorResponse(res, error);
        console.log({foundPosts})
        // response.sendResponse(res, foundCities);
        res.send(foundPosts.reverse())
    });
}


const cityPosts = (req, res) => {
    console.log('getting city post')
    db.Post.find({City: req.params.cityId}, (error, foundPosts) => {
        if (error) return response.sendErrorResponse(res, error);
        console.log({foundPosts})
        // response.sendResponse(res, foundCities);
        res.send(foundPosts.reverse())
    });
}









module.exports = {
  createPost,
  deletePost,
  userPosts,
  cityPosts
};
