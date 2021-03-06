import './loaded-env';

export const {
  PORT,
  WDS_PORT,
  CLIENT_HOST,
  COOKIE_SECRET,
  TOKEN_SECRET,
  REDIS_HOST,
  REDIS_PORT,
  DB_PORT,
  NODE_ENV,
} = process.env;

const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

export const DB = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT,
  host: DB_HOST,
  dialect: 'mysql',
};
