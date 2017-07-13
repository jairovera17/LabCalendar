/**
 * AgendaLaboratorio.js
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

    fechaInicio: {type:'date'},
    fechaFin: {type:'date'},
    horaInicio: {type:'integer'},
    horaFin: {type:'integer'},
    observacion: 'string',


    idMateriaProfesor:{
      model:'MateriaProfesor'
    },

    idLaboratorio:{
      model:'Laboratorio'
    }



  }
};

