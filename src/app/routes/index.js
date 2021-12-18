

/* Entry Point */

routes.get('/', (req, res) =>
  res.send(
    "Welcome to GoEat API, to start, create a user on the '/users' route or login on the '/sessions' route. If you have some doubt, don't forget to follow the documentation https://github.com/LauraBeatris/goeat-api/blob/master/README.md"
  )
)