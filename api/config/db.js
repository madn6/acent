import mongoose from 'mongoose';
import './back.dotenv.js';

const connectDB = async () => {
	try {
		if (!process.env.MONGO_URI) {
			throw new Error('MONGO_URI is missing in environment variable');
		}

		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`error connecting to mongodb ${error}`);
		process.exit(1);
	}
};

export default connectDB;
