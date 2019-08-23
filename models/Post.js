const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
    },

    author: {
        type: String,
    },

    content: {
        type: String,
    },
    
    create_date: {
        type: Date,
        default: Date.now,
    },

    City: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },

    likeCount: {
        type: Number,
        default: 0
    }

});

const Post = mongoose.model('Post', postSchema); // collection name 

module.exports = Post;
