const NotificationsController = require('./app/controllers/NotificationsController');


// Listing all the notifications of the restaurant and updating an specific notification
routes.get('/notifications', NotificationsController.index);
routes.put('/notifications/:notification_id', NotificationsController.update);