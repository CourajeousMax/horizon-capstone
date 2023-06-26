/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("journal", function (table) {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.date("entry_date").notNullable();
    table.text("content");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.foreign("user_id").references("id").inTable("goals");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("journal");
};
