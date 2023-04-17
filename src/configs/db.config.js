if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  "development": {
    "HOST": "127.0.0.1",
    "USER": "root",
    "PASSWORD": "",
    "DB": "ecommerce",
    "dialect": "mysql",
    "pool": {
      "min": 0,
      "max": 5,
      "acquire": 30000,
      "idle": 10000
    }
  },

  "production": {
    "HOST": process.env.DB_HOST,
    "USER": process.env.DB_USER,
    "PASSWORD": process.env.DB_PASSWORD,
    "DB": process.env.DB_NAME,
    "dialect": "mysql",
    "pool": {
      "min": 0,
      "max": 5,
      "acquire": 30000,
      "idle": 10000
    }
  }
}

module.exports = config;