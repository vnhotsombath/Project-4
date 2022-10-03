const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose.Schema({
    title: String,
    photoUrl: String,
    content: String,
    likes: [likesSchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model("Post", postSchema);
