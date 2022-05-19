import { createServer } from 'http';

import { app } from './config';
import { PORT } from './constants';

const server = createServer(app);

server.listen(PORT, (error) => {
	if (error) {
		console.error(error);
	}

	console.log(`Server is listening on ${PORT}`);
});
