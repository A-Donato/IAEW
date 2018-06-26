'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReservaSchema = new Schema({
  codigoReserva: {
    type: Number,
    required: 'Se requiere un codigo de reserva.'
  },
  fechaReserva: {
    type: Date,
    default: Date.now
  },
  iDCliente:{
    type: String,
    required: 'Se requiere identificador de cliente.'
  },
  costo:{
    type: Number,
    required: 'Se requiere indicar el costo del servicio.'
  },
  precioVenta: {
    type: Number, 
    required: 'Se requiere indicar el precio de venta.'
  }
 /* status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }*/
},
{ versionKey: false });

module.exports = mongoose.model('Reservas', ReservaSchema);