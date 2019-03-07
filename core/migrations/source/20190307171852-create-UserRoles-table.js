const TABLE_NAME = 'UserRoles';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      RoleId: {
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

    await queryInterface.addConstraint(TABLE_NAME, ['UserId'], {
      type: 'foreign key',
      name: 'fk_UserRoles_UserId_Users',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'restrict',
    });

    await queryInterface.addConstraint(TABLE_NAME, ['RoleId'], {
      type: 'foreign key',
      name: 'fk_UserRoles_RoleId_Roles',
      references: {
        table: 'Roles',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'restrict',
    });

    await queryInterface.addConstraint(TABLE_NAME, ['UserId', 'RoleId'], {
      type: 'unique',
      name: 'unique_UserRoles_UserId_RoleId',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
