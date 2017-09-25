import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import { Config } from '../config/index';

// Import model specification from its own definition file.
import { IRoleAttributes, IRoleModel, defineRole } from './role';

/**
 * Interface for DatabaseConnection for Sequelize
 * This is for the Usage of Typescript, so we are getting sequelize intellisense
 * This will be bind to the main Sequelize scope variable
 * @export
 * @interface IDbConnection
 */
export interface IDbConnection {
    Role: Sequelize.Model<IRoleModel, IRoleAttributes>;
}

const db: any = {};

const dbConfig = {
  database: process.env.DB_DATABASE || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || '',
  port: Number(process.env.DB_PORT) || 0,
  dialect: process.env.DB_DIALECT || '',
  logging: Boolean(process.env.DB_LOGGING) || true,
  force: process.env.DB_FORCE || '',
  timezone: process.env.DB_TIMEZONE || ''
};

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

// Binding model to the Sequelize Database variable
db.Role = defineRole(sequelize);

// binding any association
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.addHook('afterFind', (data: any, options: any) => {
  if (options.model && data) {
    data = [].concat(data);
    data.forEach((record: any) => {
      options.model._dateAttributes.forEach((dateAttribute: any) => {
        record.setDataValue(dateAttribute, new Date(record[dateAttribute]).getTime());
      });
    });
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const con: IDbConnection = db as IDbConnection;
export default con;
