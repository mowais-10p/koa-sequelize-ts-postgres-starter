
import * as debug from 'debug';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import * as loggerMiddleware from 'koa-bunyan-logger';
import * as jsonMiddleware from 'koa-json';

import authenticationMiddleware from './middleware/authentication';
import errorMiddleware from './middleware/error';
import requestMiddleware from './middleware/request';

import routeMiddleware from './route';

const app = new Koa();
const d = debug('test:root');

app.use(bodyParser());

// Register middleware
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(errorMiddleware());
app.use(requestMiddleware());
app.use(authenticationMiddleware());

// Registers routes via middleware
app.use(routeMiddleware());

d('current environment: %s', process.env.ENV);
d('server started at port: %d', process.env.API_PORT);
app.listen(process.env.API_PORT);
