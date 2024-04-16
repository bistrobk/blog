// Import the Mongoose library
const mongoose = require('mongoose');

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  
  try {
    // Disable strict query mode in Mongoose to allow more flexible queries
    mongoose.set('strictQuery', false);
    // Connect to the MongoDB database using the URI provided in the environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    // Log a message indicating successful database connection along with the host
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs during connection, log the error
    console.log(error);
  }

}

// Export the connectDB function to be used elsewhere in the application
module.exports = connectDB;

