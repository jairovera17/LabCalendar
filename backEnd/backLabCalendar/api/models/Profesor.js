/**
 * Profesor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type:'integer',
      unique:true,
      autoIncrement: true,
      primaryKey: true

    },
    nombres: {
      type:'string'
    },
    apellidos: {
      type:'string',
      unique:true
    },
    ultimoTitulo: 'string',
    telefono1: 'string',
    telefono2: 'string',
    correo: 'email',


    idMateriaProfesor:{
      collection:'MateriaProfesor',
      via:'idProfesor'
    }

  }
};

