const dotenv = require('dotenv');
const util = require('util')
const log = util.debuglog('app')

dotenv.config({});

const app = require('./src/app')

app.listen(process.env.PORT, () => log(`App started on port ${process.env.PORT}`))

export default app