import sequelize from '@core/models';

export default cb => sequelize.transaction(cb);
