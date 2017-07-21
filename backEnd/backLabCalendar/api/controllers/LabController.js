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
    sails.log.info(param.dia);
    AgendaLaboratorio.find(
      {dia:param.dia,
      horaInicio:param.horaInicio,
      horaFin:param.horaFin}
      ).exec(function (err, agenda) {
      sails.log.info(JSON.stringify(agenda));
      if(err){
        return res.badRequest();
      }
      return res.json(agenda);
    });

   // return res.json({

    //});
  }
};

