import { connect, connection } from 'mongoose';

// Wrap Mongoose around local connection to MongoDB
connect('mongodb://127.0.0.1:27017/palchat');

// Export connection 
export default connection;
