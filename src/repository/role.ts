import { IRoleModel } from '../models/role';
import db from '../models/index';

export const getAllRoles = async () => {
  const result = await db.Role.findAll();
  return result as IRoleModel[];
};

export const getRoleByName = async (role: string) => {
  const result = await db.Role.findOne({ where: { Role: role } });
  return result as IRoleModel;
};
