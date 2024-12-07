const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Blog = require('../models/Blog'); // Adjust the path based on your file structure

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    console.log('File Extension:', path.extname(file.originalname)); // Log extension
    console.log('MIME Type:', file.mimetype); // Log MIME type

    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

// Add a new blog with an image upload

router.post('/add', upload.single('featuredImage'), async (req, res) => {
  try {
    const { title, author, category, tags, blogText, user } = req.body;

    console.log(req.file); // Check the uploaded file object
    const featuredImage = req.file ? `uploads/${req.file.filename}` : '';
 
    // Convert the user ID to ObjectId
    const userId = mongoose.Types.ObjectId(user);
  
    // Create a new blog with the provided user ID


    // Convert category string to JSON object
    const categoryJson = JSON.parse(category);

    // Convert tags string to JSON array
    const tagsJson = JSON.parse(tags);

    const newBlog = new Blog({
      title,
      author,
      user: userId, // Store as ObjectId
      category: categoryJson,
      tags: tagsJson,
      blogText,
      featuredImage,
    });

    await newBlog.save();

    res.status(201).json({ message: 'Blog is added', blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the blog', details: error.message });
  }
});

// Edit an existing blog with an optional image upload
router.put('/edit/:id', upload.single('featuredImage'), async (req, res) => {
  try {
    const blogId = req.params.id;

    const updatedData = req.body;

    if (req.file) {
      updatedData.featuredImage = `/uploads/${req.file.filename}`;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the blog', details: error.message });
  }
});

// Delete a blog
router.delete('/delete/:id', async (req, res) => {
  try {
    const blogId = req.params.id;

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the blog', details: error.message });
  }
});

// View a blog by ID
router.get('/viewblog/:id', async (req, res) => {
  try {
    const blogId = req.params.id;

    // Find the blog and populate the user field
    const blog = await Blog.findById(blogId).populate('user', 'name email'); // Only fetch email and profile picture

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the blog', details: error.message });
  }
});

router.post('/add-comment/:id', async (req, res) => {
  const blogId = req.params.id;
  const { name, email, comment } = req.body;

  // Validate the input
  if (!name || !email || !comment) {
    return res.status(400).json({ message: 'Name, email, and comment are required' });
  }

  try {
    // Find the blog by its ID
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Add the new comment to the blog's comments array
    blog.comments.push({ name, email, comment, dateCreated: Date.now(),  });

    // Save the blog with the new comment
    await blog.save();

    // Respond with the updated blog
    res.status(200).json({ message: 'Comment added successfully', blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get all comments for a specific blog by blogID
router.get('/comments/:blogId', async (req, res) => {
  const { blogId } = req.params; // Extract blogId from request params

  try {
    // Find the blog by its ID and populate the comments field
    const blog = await Blog.findById(blogId).select('comments'); // Only select the comments field

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' }); // If no blog found, return 404
    }

    // Return the comments
    res.status(200).json({ comments: blog.comments }); // Send the comments as a response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching comments' }); // Handle any server errors
  }
});


module.exports = router;
