import { Context } from 'koa';
import * as compose from 'koa-compose';
import * as boom from 'boom';
import * as auth from './../authentication/auth';

const authentication = async (ctx: Context, next: () => void) => {
    const token = ctx.header.authorization;
    if (token === null) {
        throw boom.unauthorized();
    } else {
        const user = await auth.fetchUser(token);
        if (user && user.username) {
            await next();
        }
    }
};

export default () => compose([
    authentication,
]);
