const DeliveryController = require('./app/controllers/DeliveryController');


// Creating, updating and delivering the order
routes.post('/deliveries/:order_id', DeliveryController.store);
routes.put('/deliveries/:delivery_id', DeliveryController.update);
routes.delete('/deliveries/:delivery_id', DeliveryController.delete);