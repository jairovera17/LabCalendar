/**
 * AgendaLaboratorio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaInicio: 'date',
    fechaFin: 'date',
    horaInicio: 'integer',
    horaFin: 'integer',
    observacion: 'string',

    materiaProfesor:{
      model:'MateriaProfesor'
    },
    laboratorio:{
      model: 'Laboratorio'
    }
  }
};

