const OrderController = require('./app/controllers/OrderController');


// Creating, listing and cancelling orders
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.delete('/orders/:order_id', OrderController.delete);