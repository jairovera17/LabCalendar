/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idMateria:{
      type:'integer',
      unique:true,
      autoIncrement: true
    },
    nombre: {
      type:'string',
      unique: true
    },
    codigo: {
      type:'string',
      unique: true

    }


  }
};

