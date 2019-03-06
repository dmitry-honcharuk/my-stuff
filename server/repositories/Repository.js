import { Model } from 'sequelize';

export default class Repository {
  constructor(model) {
    this.model = model;
  }

  /**
   * @returns {Promise<Model>}
   */
  findByPk(...params) {
    return this.model.findByPk(...params);
  }

  /**
   * @returns {Promise<Model>}
   */
  findOne(...params) {
    return this.model.findOne(...params);
  }

  /**
   * @returns {Promise<number>}
   */
  count(...params) {
    return this.model.count(...params);
  }

  /**
   * @returns {Promise<Model>}
   */
  create(...params) {
    return this.model.create(...params);
  }
}
