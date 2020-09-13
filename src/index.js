'use strict'

const { server } = require('./config')
const app = require('./server')

const { port } = server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}.`)
})
