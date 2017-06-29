/**
 * Laboratorio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: 'string',
    numeroAula: 'string',
    numeroComputadoras: 'string',
    modeloComputador:{
      model:'ModeloComputador',
      via:'idModelo'

    },

    software:{
      collection:'Software',
      via:'owners',
      dominant:true
    }
  }



};

