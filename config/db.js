const database = {
  'development': {
    'username': process.env.DB_USER || 'postgres',
    'password': process.env.DB_PASS || null,
    'database': process.env.DB_NAME || 'app_development',
    'settings': {
      'host': process.env.DB_HOST || '127.0.0.1',
      'dialect': 'postgres',
      'logging': false
    }
  },
  'test': {
    'username': process.env.DB_USER || 'postgres',
    'password': process.env.DB_PASS || null,
    'database': process.env.DB_NAME || 'app_test',
    'settings': {
      'host': process.env.DB_HOST || '127.0.0.1',
      'dialect': 'postgres',
      'logging': false
    }
  },
  'production': {
    'username': process.env.DB_USER || 'postgres',
    'password': process.env.DB_PASS || null,
    'database': process.env.DB_NAME || 'app',
    'settings': {
      'host': process.env.DB_HOST || '127.0.0.1',
      'dialect': 'postgres',
      'logging': false
    }
  }
}

module.exports = database
