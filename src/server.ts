/// Executing this file allows the server to begin listening for requests.
import * as http from 'http';

/// Import the app from the 'app.ts' file.
import { app } from './app';

const server: http.Server = http.createServer(app);
const port: number = 3000;

server.listen(port);
server.on('listening', () => {
    console.log(`Listening at: 'http://127.0.0.1:${port}'`);
});
