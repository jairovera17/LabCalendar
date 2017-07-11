/**
 * ModeloComputador.js
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
    marca: {
      type:'string',

    },
    procesador: {
      type:'string',

    },
    ram: {
      type:'string',

    },
    idLaboratorio:{
      collection:'Laboratorio',
      via:'idModeloComputador'
    }


  }
};

