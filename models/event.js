'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // ASOCIACIÓN CORREGIDA
      Event.belongsTo(models.Categorie, {
        foreignKey: 'categoryId',
        as: 'categorie'
      });
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    categoryId: DataTypes.INTEGER,
    state: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};