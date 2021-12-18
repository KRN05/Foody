const express = require('express');
const cors = require('cors');
const Router = require('./app/routes')
const Queue = require('./lib/Queue');

require('./database');

const app = express()

app.use(cors())

app.use('/food-app/', Router)

// Handle error if any
app.use(function (req, res, next) {
    return res.status(400).send({ message: 'BAD REQUEST' })
})

Queue.processQueue();

export { app }

