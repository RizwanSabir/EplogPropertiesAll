const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  videolink: {
    type: String,
    required: false,
  },
  emailid: {
    type: String,
    required: true,
    unique: true,
  },
  instagramId: {
    type: String,
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  introduction: {
    type: String,
    required: false,
  },
  profileImage: {
    type: String, // Could be a URL or path to an image
    required: false,
  },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
