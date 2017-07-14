/**
 * Laboratorio.js
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

    nombre: {type:'string',required: true, unique: true},
    numeroAula: {type:'string',required: true},
    numeroComputadoras: {type:'string',required: true},


    idModeloComputador:{
      model:'ModeloComputador'
    },

    idSoftware:{
      collection:'Software',
      via:'idLaboratorio',
      dominant:true
    },

    idAgendaLaboratorio:{
      collection:'AgendaLaboratorio',
      via:'idLaboratorio'
    }


  }



};

