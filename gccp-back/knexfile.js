// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  production: {
    client: 'postgresql',
    connection: {
      // host:'',
      database: 'mensagem',
      user:     'postgres',
      password: '1234'
      // ssl:{ rejectUnauthorized:true }
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
