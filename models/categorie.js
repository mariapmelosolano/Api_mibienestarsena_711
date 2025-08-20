'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    static associate(models) {
      // AGREGA LA ASOCIACIÓN INVERSA
      Categorie.hasMany(models.Event, {
        foreignKey: 'categoryId',
        as: 'events'
      });
    }
  }
  Categorie.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorie',
  });
  return Categorie;
};