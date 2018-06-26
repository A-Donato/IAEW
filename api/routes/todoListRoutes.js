'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/reservas')
    .get(todoList.list_all_reservas)
    .post(todoList.create_a_reserva);


  app.route('/reservas/:codigoReserva')
    .get(todoList.read_a_reserva)
    .put(todoList.update_a_reserva)
    .delete(todoList.delete_a_reserva);
};
