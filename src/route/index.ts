import { methodNotAllowed, notImplemented } from 'boom';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import role from './role';

const router = new Router({
  prefix: '/',
});

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  methodNotAllowed: () => methodNotAllowed(),
  notImplemented: () => notImplemented(),
  throw: true,
});
export default () => compose([
  role(),
  allowedMethods
]);
