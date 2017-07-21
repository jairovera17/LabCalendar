/**
 * LabController
 *
 * @description :: Server-side logic for managing Labs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `LabController.getAgenda()`
   */
  getAgenda: function (req, res) {

    var param = req.allParams();
    AgendaLaboratorio.findOne(
      {dia:param.dia,

      horaInicio:param.horaInicio,
      horaFin:param.horaFin}
      ).exec(function (err, agenda) {


      if(err){
        return res.send('error en agenda');
      }
     else{

        if(agenda){
          MateriaProfesor
            .findOne({id:agenda.idMateriaProfesor})
            .exec(function (err,materiaprofesor) {
            sails.log.info(materiaprofesor);
            if(err){
              return res.send('error en materia profesor');
            }
            else{
              //res.json(materiaprofesor);
              if(materiaprofesor){
                Materia.findOne({id:materiaprofesor.idMateria}).exec(function (err,materia) {
                  sails.log.info(materia);
                  if(err){
                    return res.send('error en materia');
                  }
                  else
                    res.json(materia);



                });
              }

            }

          });
        }



      }
    });

   // return res.json({

    //});

  },

  getMateriaProfesor: function (req,res) {

    var param = req.allParams();
    MateriaProfesor.find({id:param.idMateriaProfesor}).exec(function (err,materiaprofesor) {
      sails.log.info(materiaprofesor);
      if(err){
        res.badRequest;
      }
      else{
        res.json(materiaprofesor);
      }
    });
  }
};

