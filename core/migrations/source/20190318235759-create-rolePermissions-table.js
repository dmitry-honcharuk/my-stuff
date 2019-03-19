const TABLE = 'RolePermissions';

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable(TABLE, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    RoleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    PermissionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
  });

  await queryInterface.addConstraint(TABLE, ['RoleId'], {
    type: 'foreign key',
    name: 'fk_RolePermissions_RoleId_Roles',
    references: {
      table: 'Roles',
      field: 'id',
    },
    onDelete: 'restrict',
    onUpdate: 'restrict',
  });

  await queryInterface.addConstraint(TABLE, ['PermissionId'], {
    type: 'foreign key',
    name: 'fk_RolePermissions_PermissionId_Permissions',
    references: {
      table: 'Permissions',
      field: 'id',
    },
    onDelete: 'restrict',
    onUpdate: 'restrict',
  });

  await queryInterface.addConstraint(TABLE, ['RoleId', 'PermissionId'], {
    type: 'unique',
    name: 'unique_RolePermissions_RoleId_PermissionId',
  });
};

export const down = async queryInterface => {
  await queryInterface.dropTable(TABLE);
};
