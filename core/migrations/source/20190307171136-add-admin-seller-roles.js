import { USER_ROLES } from '@core/constants';

module.exports = {
  up: async queryInterface => {
    await queryInterface.sequelize.query(`
      INSERT INTO Roles (name)
      VALUES ('${USER_ROLES.ADMIN}'),
             ('${USER_ROLES.SELLER}');
    `);
  },

  down: async queryInterface => {
    await queryInterface.sequelize.query(`
      DELETE
      FROM Roles
      WHERE name = '${USER_ROLES.ADMIN}' OR name = '${USER_ROLES.SELLER}';
    `);
  },
};
