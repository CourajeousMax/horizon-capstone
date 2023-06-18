// Update with your config settings.
require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
};
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('goals', function(table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.string("title").notNullable();
    table.string("description");
    table.boolean("goal_completed").defaultTo(false);
    table.date("completion_date").notNullable().defaultTo(knex.fn.now());
    table.foreign("user_id").references("id").inTable("users");
  })
  }

  exports.down = function(knex) {
  return knex.schema.dropTable("goals");
};
