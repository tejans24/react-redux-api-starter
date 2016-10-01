const database = {
  "development": {
    "username": process.env.DB_USER || "postgres",
    "password": process.env.DB_PASS || null,
    "database": process.env.DB_NAME || "sbna_development",
    "settings": {
      "host": process.env.DB_HOST || "127.0.0.1",
      "dialect": "postgres",
      "logging": false
    },
    "graphdb": {
      "username": process.env.GRAPH_DB_USER || "neo4j",
      "password": process.env.GRAPH_DB_PASS || "password",
      "settings": {
        "host": process.env.GRAPH_DB_HOST || "localhost",
        "protocol": process.env.GRAPH_DB_HOST || "bolt://"
      }
    }
  },
  "test": {
    "username": process.env.DB_USER || "postgres",
    "password": process.env.DB_PASS || null,
    "database": process.env.DB_NAME || "sbna_test",
    "settings": {
      "host": process.env.DB_HOST || "127.0.0.1",
      "dialect": "postgres",
      "logging": false
    },
    "graphdb": {
      "username": process.env.GRAPH_DB_USER || "neo4j",
      "password": process.env.GRAPH_DB_PASS || "password",
      "settings": {
        "host": process.env.GRAPH_DB_HOST || "localhost",
        "protocol": process.env.GRAPH_DB_HOST || "bolt://"
      }
    }
  },
  "production": {
    "username": process.env.DB_USER || "postgres",
    "password": process.env.DB_PASS || null,
    "database": process.env.DB_NAME || "sbna",
    "settings": {
      "host": process.env.DB_HOST || "127.0.0.1",
      "dialect": "postgres",
      "logging": false
    },
    "graphdb": {
      "username": process.env.GRAPH_DB_USER || "neo4j",
      "password": process.env.GRAPH_DB_PASS || "password",
      "settings": {
        "host": process.env.GRAPH_DB_HOST || "localhost",
        "protocol": process.env.GRAPH_DB_HOST || "bolt://"
      }
    }
  }
}

module.exports = database;