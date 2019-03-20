import client from './client';

/**
 * @param {string} setName
 * @param  {...any} values
 * @returns {Promise<number>}
 */
export const add = (setName, ...values) =>
  new Promise((resolve, reject) => {
    client.sadd(setName, ...values, (err, reply) => {
      if (err) {
        return reject(err);
      }

      return resolve(reply);
    });
  });

/**
 *
 * @param {string} setName
 * @param {*} value
 * @returns {Promise<boolean>}
 */
export const isMember = (setName, value) =>
  new Promise((resolve, reject) => {
    client.sismember(setName, value, (err, reply) => {
      if (err) {
        return reject(err);
      }

      return resolve(Boolean(reply));
    });
  });

/**
 * @param {string} setName
 * @param  {...any} values
 * @returns {Promise<number>}
 */
export const remove = (setName, ...values) =>
  new Promise((resolve, reject) => {
    client.srem(setName, ...values, (err, reply) => {
      if (err) {
        return reject(err);
      }

      return resolve(reply);
    });
  });
