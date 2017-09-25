import * as Sequelize from 'sequelize';

export interface IRoleAttributes {
    ID: string;
    Role: string;
}

export interface IRoleModel extends Sequelize.Instance<IRoleAttributes> {
    ID: string;
    Role: string;
}

/**
 * Defining main sequelize function for binding on the model index
 *
 * @param {Sequelize.Sequelize} sequelize
 * @returns
 */
export const defineRole = (sequelize: Sequelize.Sequelize) => {
    const Role = sequelize.define('Role', {
        ID: {
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        Role: Sequelize.STRING
    }, {
            freezeTableName: true,
            timestamps: false
        });
    return Role;
};
