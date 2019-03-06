import Sequelize from 'sequelize';

import { DB } from '@core/config';

const sequelize = new Sequelize(DB.database, DB.username, DB.password, {
  host: DB.host,
  dialect: 'mysql',
});

export default sequelize;
