import * as express from 'express';

const app: express.Application = express();

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export { app };
