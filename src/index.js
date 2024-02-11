import dotenv from 'dotenv';

import dbConnection from './db/index.js';
import { app } from './app.js';

dotenv.config({ path: '.env' });

dbConnection()
	.then(() => {
		app.on('error', (error) => {
			console.log('Express failed to run', error);
			throw error;
		});

		app.listen(process.env.PORT, () => {
			console.log(`Express running on ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log('MongoDB Connection failed:', error);
	});
