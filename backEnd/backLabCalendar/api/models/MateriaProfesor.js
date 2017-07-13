/**
 * MateriaProfesor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   /* id:{
      type:'integer',
      unique:true,
      autoIncrement: true,
      primaryKey: true

    },*/
    grupo: {
      type:'string',

    },


    idProfesor:{
      model:'Profesor',
      required:true

    },

    idMateria:{
      model:'Materia',
        required:true

    },

    idAgendaLaboratorio:{
      collection:'AgendaLaboratorio',
      via:'idMateriaProfesor'
    }


  }
};

