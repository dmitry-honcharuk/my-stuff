import { Model } from 'sequelize';

export default class Repository {
  constructor(model) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }

  /**
   * @returns {Promise<Model[]>}
   */
  findAll(...params) {
    return this.model.findAll(...params);
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

  /**
   * @returns {Promise<Model>}
   */
  bulkCreate(...params) {
    return this.model.bulkCreate(...params);
  }

  /**
   * @returns {Promise<Model>}
   */
  destroy(...params) {
    return this.model.destroy(...params);
  }

  /**
   * @returns {Promise<Model>}
   */
  update(...params) {
    return this.model.update(...params);
  }
}
