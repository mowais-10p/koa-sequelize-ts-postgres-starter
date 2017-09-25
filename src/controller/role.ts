import { Context } from 'koa';
import * as roleService from '../service/role';

export const get = async (ctx: Context) => {
  const dbRoles = await roleService.getAllRoles();
  ctx.body = { roles: dbRoles, time: Date.now() };
};

export const post = (ctx: Context) => {
  ctx.body = '[POST]: /role';
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT]: /role';
};
