const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
    },

    author: {
        type: String,
    },

	comment: [
		{
			type: Schema.Types.ObjectId,
			// collection 
			ref: 'Comment'
		}
    ],
    
    create_date: {
        type: Date,
        default: Date.now,
    },

    City: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },

});

const Post = mongoose.model('Post', postSchema); // collection name 

module.exports = Post;
