import { createServer } from 'https';

import { app, serverOptions } from './config';
import { PORT } from './constants';

const server = createServer(serverOptions, app);

server.listen(PORT, (error) => {
	if (error) {
		console.error(error);
	}
	console.log(`Server is listening on ${PORT}`);
});
