// Importing the mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Destructuring the Schema class from mongoose
const { Schema } = mongoose;

// Creating a new mongoose schema called PostSchema to define the structure of the Post model
const PostSchema = new Schema({
  // Title field of type String, which is required
  title: {
    type: String,
    required: true
  },
  // Body field of type String, which is required
  body: {
    type: String,
    required: true
  },
  // createdAt field of type Date, with a default value set to the current date and time
  createdAt: {
    type: Date,
    default: Date.now
  },
  // updatedAt field of type Date, with a default value set to the current date and time
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Exporting the mongoose model 'Post', which uses the PostSchema as its structure
module.exports = mongoose.model('Post', PostSchema);
