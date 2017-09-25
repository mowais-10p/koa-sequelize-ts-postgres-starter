import * as compose from 'koa-compose';
import * as Router from 'koa-router';

import * as ctrl from '../controller/role';

const router = new Router({
    prefix: '/role',
});

router.get('/', ctrl.get);
router.post('/', ctrl.post);
router.put('/', ctrl.put);

const routes = router.routes();

export default () => compose([
    routes
]);
