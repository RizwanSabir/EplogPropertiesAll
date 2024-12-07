const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  youtubeLink: {
    type: String,
    required: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, // Refers to the Category schema
    ref: 'Category',
    required: true,
  },
  tags: [{
    type: String,
    required: false,
  }],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  blogText: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String, // Could be a URL or path to an image
    required: false,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
