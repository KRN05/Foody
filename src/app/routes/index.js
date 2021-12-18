const Router = express.Router()
const dashBoardRouter = require('./dashboard.route')
const deliveryRouter = require('./delivery.route')
const fileRouter = require('./file.route')
const foodRouter = require('./food.route')
const notificationRouter = require('./notification.route')
const orderRouter = require('./order.route')
const providerRouter = require('./provider.route')
const restaurantRouter = require('./restaurant.route')
const scheduleRouter = require('./schedule.route')
const sessionRouter = require('./session.route')
const userRouter = require('./user.route')

const Router = express.Router()

/* Entry Point */
Router.get('/', (req, res) =>
  res.send(
    "Welcome, login, select the restaurant, food, and order!!!"
  )
)

Router.use('/dashboard', dashBoardRouter)
Router.use('/delivery', deliveryRouter)
Router.use('/files', fileRouter)
Router.use('/foods', foodRouter)
Router.use('/notifications', notificationRouter)
Router.use('/orders', orderRouter)
Router.use('/providers', providerRouter)
Router.use('/restaurants', restaurantRouter)
Router.use('/schedule', scheduleRouter)
Router.use('/sessions', sessionRouter)
Router.use('/users', userRouter)

export { Router }

