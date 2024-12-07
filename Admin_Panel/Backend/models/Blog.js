const mongoose = require('mongoose');

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String, // Author's name or a display name
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: 'emails', // Name of the user model
    required: true,
  },
  category: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  tags: [
    {
      label: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  blogText: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String, // URL or path to the featured image
    required: false,
  },
  likes: {
    type: Number,
    default: 0, // Start with 0 likes
  },
  comments: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      dateCreated: { type: Date, default: Date.now } // Optional: You could also set a default value in the schema itself
    },
  ], // Array of comment objects
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
