const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: {
        type: String,
    },

	post: [
		{
			type: Schema.Types.ObjectId,
			// collection 
			ref: 'Post'
		}
    ],

    content: {
        type: String,

    },

    create_date: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model('Comment', commentSchema); // collection name 

module.exports = Comment;
