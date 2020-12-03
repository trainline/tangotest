import * as bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import https from 'https';
import path from 'path';

import stations from './routes/stations';

export const app = express();
const buildPath = path.join(process.cwd() + '/build');

/**
 * Express routes and middlewares
 */
app.use(express.static(buildPath));
app.get('/', (_, res) => res.sendFile(path.join(buildPath, 'index.html')));

app.use(bodyParser.json({ limit: '300kb' }));
app.get('/ping', (_, res) => res.send('pong'));
app.get('/stations', stations);

/**
 * App server
 */
const tlsServerOptions = {
  key: fs.readFileSync('dev-certs/server-key.pem'),
  cert: fs.readFileSync('dev-certs/server-crt.pem'),
};
const port = process.env.EXPRESS_PORT || 8443;
export const server = https.createServer(tlsServerOptions, app).listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
