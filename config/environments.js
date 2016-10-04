// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.

import path from 'path'
import database from './db'

module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development : (config) => ({
    compiler_public_path : `http://${config.server_host}:${config.server_port}/`,
    proxy: {
      enabled: true
    }
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production : (config) => ({
    compiler_public_path     : '/',
    compiler_fail_on_warning : false,
    compiler_hash_type       : 'chunkhash',
    compiler_devtool         : null,
    compiler_stats           : {
      chunks       : true,
      chunkModules : true,
      colors       : true
    }
  }),
  api: {
    'port': process.env.API_PORT || 3001,
    'host': process.env.API_HOST || 'localhost'
  },
  proxy: {
    enabled: true
  },
  winston: {
    file: {
      'level': 'info',
      'filename': path.resolve(__dirname, '../logs/all-logs.js'),
      'handleExceptions': true,
      'json': true,
      'maxsize': 5242880, // 5MB
      'maxFiles': 5,
      'colorize': false
    },
    'console': {
      'level': 'debug',
      'handleExceptions': true,
      'json': false,
      'colorize': true
    }
  },
  database
}

