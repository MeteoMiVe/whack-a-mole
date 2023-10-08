import mongoose from 'mongoose';

// Function to connect to our remote MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error('Mongo connection string is undefined!');
    }

    const mongoDB = await mongoose.connect(mongoURI);

    console.log(`MongoDB connected: ${mongoDB.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
