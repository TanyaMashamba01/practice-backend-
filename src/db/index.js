import mongoose from 'mongoose';

const dbConnection = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGODB_URL}/${process.env.DB_NAME}`
		);

		console.log(
			`Connected to DB: ${connectionInstance.connection.name}, host: ${connectionInstance.connection.host}, on port: ${connectionInstance.connection.port}`
		);
	} catch (error) {
		console.error('Mongodb failed to connect:', error);
		process.exit(1);
	}
};

export default dbConnection;
