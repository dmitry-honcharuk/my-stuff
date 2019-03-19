const TABLE = 'UserPermissions';

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable(TABLE, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserId: {
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

  await queryInterface.addConstraint(TABLE, ['UserId'], {
    type: 'foreign key',
    name: 'fk_UserPermissions_UserId_Users',
    references: {
      table: 'Users',
      field: 'id',
    },
    onDelete: 'restrict',
    onUpdate: 'restrict',
  });

  await queryInterface.addConstraint(TABLE, ['PermissionId'], {
    type: 'foreign key',
    name: 'fk_UserPermissions_PermissionId_Permissions',
    references: {
      table: 'Permissions',
      field: 'id',
    },
    onDelete: 'restrict',
    onUpdate: 'restrict',
  });

  await queryInterface.addConstraint(TABLE, ['UserId', 'PermissionId'], {
    type: 'unique',
    name: 'unique_UserPermissions_UserId_PermissionId',
  });
};

export const down = async queryInterface => {
  await queryInterface.dropTable(TABLE);
};
