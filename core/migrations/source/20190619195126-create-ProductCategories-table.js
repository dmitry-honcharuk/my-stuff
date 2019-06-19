const TABLE_NAME = 'ProductCategories';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      CategoryId: {
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

    await queryInterface.addConstraint(TABLE_NAME, ['ProductId'], {
      type: 'foreign key',
      name: 'fk_ProductCategories_ProductId_Products',
      references: {
        table: 'Products',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'restrict',
    });

    await queryInterface.addConstraint(TABLE_NAME, ['CategoryId'], {
      type: 'foreign key',
      name: 'fk_ProductCategories_CategoryId_Categories',
      references: {
        table: 'Categories',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'restrict',
    });

    await queryInterface.addConstraint(
      TABLE_NAME,
      ['ProductId', 'CategoryId'],
      {
        type: 'unique',
        name: 'unique_UserRoles_UserId_RoleId',
      },
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
