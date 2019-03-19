const TABLE = 'Permissions';

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable(TABLE, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
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
};

export const down = async queryInterface => {
  await queryInterface.dropTable(TABLE);
};
