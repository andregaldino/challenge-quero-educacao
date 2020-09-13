'use strict'

require('dotenv').config()

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
  },
}
