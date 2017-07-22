/**
 * LabController
 *
 * @description :: Server-side logic for managing Labs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `LabController.getMateriaGivenAgenda()`
   */
  getMateriaGivenAgenda: function (req, res) {

    var param = req.allParams();
    AgendaLaboratorio.findOne(
      {dia:param.dia,
      idLaboratorio:param.idLaboratorio,
      horaInicio:param.horaInicio,
      horaFin:param.horaFin}
      ).exec(function (err, agenda) {
      sails.log.info('agenda ='+agenda);

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
              return res.send('error en agenda');
            }
            else{
              //res.json(materiaprofesor);
              if(materiaprofesor){
                Materia.findOne({id:materiaprofesor.idMateria}).exec(function (err,materia) {
                  sails.log.info('materia ='+materia);
                  if(err){
                    return res.send('error en materia');
                  }
                  else{
                    if(materia)
                      return res.json(materia);
                    else
                      return res.send('vacio');
                  }



                });
              }
              else return res.send('vacio');

            }

          });
        }
        else return res.send('vacio');
      }
    });

   // return res.json({

    //});

  },

  getAgenda: function (req,res) {
    var param = req.allParams();
    AgendaLaboratorio.findOne(
      {dia:param.dia,
        idLaboratorio:param.idLaboratorio,
        horaInicio:param.horaInicio,
        horaFin:param.horaFin})
      .exec(function (err,agenda) {
        if(err){
          return res.send('error en agenda');
        }
        else{
          if(agenda){
            return res.json(agenda);

          }
          else
            return res.notFound('no hay');
        }
      })


  },

  deleteAgenda: function (req, res) {
    var param = req.allParams();
    AgendaLaboratorio (
      {dia:param.dia,
       horaInicio:param.horaInicio,
       horaFin:param.horaFin,
       idLaboratorio:param.idLaboratorio,
       idMateriaProfesor:param.idMateriaProfesor
      }
      ).exec(function (err) {
      if(err){
        return res.negotiate(err);
      }
      return res.ok();

    })

  }
};

