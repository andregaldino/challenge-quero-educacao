'use strict'

const dotenv = require('dotenv')

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
dotenv.config({ path: envFile })

const dbLog = process.env.QUERY_LOG || false

module.exports = {
  server: {
    port: process.env.PORT || 80,
  },
  database: {
    driver: process.env.DATABASE_DRIVER || 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || '3306',
    db: process.env.DATABASE_DB || 'marketplace',
    username: process.env.DATABASE_USER || 'quero',
    password: process.env.DATABASE_PASSWORD || 'secret',
    logging: String(dbLog) === 'true',
  },
}
