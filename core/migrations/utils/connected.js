import connection from '@core/models/config/connection';

const connected = cb => async () => {
  await connection;

  await cb();
};

export default connected;
