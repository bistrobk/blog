// Importing the mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Destructuring the Schema class from mongoose
const { Schema } = mongoose;

// Creating a new mongoose schema called UserSchema to define the structure of the User model
const UserSchema = new Schema({
  // Username field of type String, which is required and must be unique
  username: {
    type: String,
    required: true,
    unique: true
  },
  // Password field of type String, which is required
  password: {
    type: String,
    required: true,
  }
});

// Exporting the mongoose model 'User', which uses the UserSchema as its structure
module.exports = mongoose.model('User', UserSchema);
