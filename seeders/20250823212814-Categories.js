'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        nombre: 'Liderazgo',
        descripcion: 'Talleres de liderazgo',
        imagen: 'https://blog.totalpass.com.mx/wp-content/uploads/2023/08/El-liderazgo-que-hoy-necesita-tu-empresa.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Educación',
        descripcion: 'Talleres prácticos y educativos',
        imagen: 'https://educacion.udd.cl/files/2015/11/IMG_6482-scaled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Recreación',
        descripcion: 'Eventos de recreación para los aprendices',
        imagen: 'https://static.vecteezy.com/system/resources/previews/016/690/603/original/kids-riding-roller-skates-in-city-park-for-outdoors-activity-sport-recreation-or-weekend-leisure-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cultural',
        descripcion: 'Eventos culturales y artísticos',
        imagen: 'https://www.arqhys.com/general/wp-content/uploads/2011/07/Cultura-de-Ecuador-800x600.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Deportivo',
        descripcion: 'Eventos deportivos y competencias',
        imagen: 'https://templebarbcn.com/wp-content/uploads/2022/12/curiosidades-del-mundo-del-deporte.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};