'use strict';


var mongoose = require('mongoose'),
  reserva = mongoose.model('Reservas');

exports.list_all_reservas = function(req, res) {
  reserva.find({}, function(err, reserva) {
    if (err)
      res.send(err);
    res.json(reserva);
  });
};




exports.create_a_reserva = function(req, res) {
  var new_reserva = new reserva(req.body);
  new_reserva.save(function(err, reserva) {
    if (err)
      res.send(err);
    res.json(reserva);
  });
};


exports.read_a_reserva = function(req, res) {
  reserva.findById(req.params.reservaId, function(err, reserva) {
    if (err)
      res.send(err);
    res.json(reserva);
  });
};


exports.update_a_reserva = function(req, res) {
  reserva.findOneAndUpdate({_id: req.params.reservaId}, req.body, {new: true}, function(err, reserva) {
    if (err)
      res.send(err);
    res.json(reserva);
  });
};


exports.delete_a_reserva = function(req, res) {
  reserva.deleteOne({
    codigoReserva:req.params.codigoReserva
  }, function(err, reserva) {
    if (err)
      res.send(err);
    res.json({ message: 'reserva successfully deleted (falta excepciones)'});
  });
};


