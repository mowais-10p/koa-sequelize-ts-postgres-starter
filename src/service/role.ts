import { Context } from 'koa';
import { IRoleModel } from './../models/role';
import * as role from './../repository/role';

export const getAllRoles = async () => {
  const result = await role.getAllRoles();
  return result as IRoleModel[];
};

export const getRoleByName = async (roleName: string) => {
  const result = await role.getRoleByName(roleName);
  return result as IRoleModel;
};
