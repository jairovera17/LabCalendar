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
      horaInicio:{'<=':param.horaInicio},
      horaFin:{'>=':param.horaFin}
      }
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
      //      sails.log.info(materiaprofesor);
            if(err){
              return res.send('error en agenda');
            }
            else{
              //res.json(materiaprofesor);
              if(materiaprofesor){
                Materia.findOne({id:materiaprofesor.idMateria}).exec(function (err,materia) {
         //         sails.log.info('materia ='+materia);
                  if(err){
                    return res.undefined;
                  }
                  else{
                    if(materia)
                      return res.json(materia);
                    else
                      return res.badRequest();
                  }



                });
              }
              else return res.badRequest();
            }

          });
        }
        else return res.badRequest();
      }
    });

   // return res.json({

    //});

  },
//haloooooooooo

  getAgenda: function (req,res) {

   var param = req.allParams();

   sails.log.info(req.semanaInicio);
    sails.log.info(req.semanaFin);



    AgendaLaboratorio.findOne().where({
     or:[
       //rango externo
       {
         fechaInicio:{'<=':param.semanaInicio},
         fechaFin:{'>=':param.semanaFin},
         dia:param.dia,
         idLaboratorio:param.idLaboratorio,
         horaInicio:{'<=':param.horaInicio},
         horaFin:{'>=':param.horaFin}
       },
       //rango left
       {
         fechaInicio:{'<=':param.semanaInicio},
         fechaFin:{'>=':param.semanaInicio},
         dia:param.dia,
         idLaboratorio:param.idLaboratorio,
         horaInicio:{'<=':param.horaInicio},
         horaFin:{'>=':param.horaFin}
       },
       //rango right
       {

         fechaInicio:{'<=':param.semanaFin},
         fechaFin:{'>=':param.semanaFin},
         dia:param.dia,
         idLaboratorio:param.idLaboratorio,
         horaInicio:{'<=':param.horaInicio},
         horaFin:{'>=':param.horaFin}
       },
       //rango interno
       {
         fechaInicio:{'>=':param.semanaInicio},
         fechaFin:{'<=':param.semanaFin},
         dia:param.dia,
         idLaboratorio:param.idLaboratorio,
         horaInicio:{'<=':param.horaInicio},
         horaFin:{'>=':param.horaFin}
       }


     ]


   }).exec(function (err,agenda){
     if(err)
       return res.badRequest;
     else{
       if(agenda){
        res.json(agenda);
       }

       else
         return res.ok();
     }

   })

  },

  getMateria:function(req,res){
    var param = req.allParams();
    MateriaProfesor.findOne({
      id:param.idMateriaProfesor
    }).exec(function (err,matprof) {
      if(err)
        return res.badRequest();
      else{
        return matprof;
      }

    });

  }
  ,

  deleteAgenda: function (req, res) {
    var param = req.allParams();
    AgendaLaboratorio.destroy(

      {dia:param.dia,
        idLaboratorio:param.idLaboratorio,
        horaInicio:{'<=':param.horaInicio},
        horaFin:{'>=':param.horaFin}
      }
      ).exec(function (err) {
      if(err){
        return res.negotiate(err);
      }
      return res.ok();

    })

  }
};

