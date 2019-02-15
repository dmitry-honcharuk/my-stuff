import '../loaded-env';

export const PORT = process.env.PORT;
export const WDS_PORT = process.env.WDS_PORT;
export const SITE_HOST = process.env.SITE_HOST;

export const DB = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql"
};
