import './loaded-env';

export const {
  PORT,
  WDS_PORT,
  SITE_HOST,
  COOKIE_SECRET,
  TOKEN_SECRET,
  REDIS_HOST,
  REDIS_PORT,
} = process.env;

const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

export const DB = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  host: DB_HOST,
  dialect: 'mysql',
};
