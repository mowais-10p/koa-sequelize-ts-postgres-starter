import { Context } from 'koa';
import * as compose from 'koa-compose';

const handler = async (ctx: Context, next: () => void) => {
  try {
    await next();
  } catch (error) {
    ctx.log.error(error);

    if (error.isBoom) {
      ctx.body = error.output.payload;
      ctx.status = error.output.statusCode;

      return;
    } else {
      // General Exception
      ctx.body = error.message;
      ctx.status = error.statusCode || 500;

      return;
    }
  }
};

export default () => compose([
  handler,
]);
