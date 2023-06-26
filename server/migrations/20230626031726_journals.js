/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("journals", function (table) {
      table.increments("id").primary();
      table.integer("user_id").notNullable();
      table.timestamp("completed_at").defaultTo(knex.fn.now());
      table.text("content");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .then(function () {
      return knex("journals").insert([
        { user_id: 1, completed_at: knex.fn.now(), content: "Describe a recent accomplishment and how it made you feel." },
        { user_id: 1, completed_at: knex.fn.now(), content: "Write about a challenge you're currently facing and potential solutions." },
        { user_id: 1, completed_at: knex.fn.now(), content: "Reflect on a meaningful conversation you had recently and its impact on you." },
        { user_id: 1, completed_at: knex.fn.now(), content: "What are three things that made you smile today? Why?" },
        { user_id: 1, completed_at: knex.fn.now(), content: "Describe a place you've always wanted to visit and why it interests you." },
        { user_id: 1, completed_at: knex.fn.now(), content: "Write about a book or article that inspired you and how it influenced your thinking." },
        { user_id: 1, completed_at: knex.fn.now(), content: "Reflect on a mistake you made and the lessons you learned from it." },
        { user_id: 1, completed_at: knex.fn.now(), content: "Write about a goal you've achieved recently and the steps you took to get there." },
        { user_id: 1, completed_at: knex.fn.now(), content: "What are three things you appreciate about yourself? Why?" },
        { user_id: 1, completed_at: knex.fn.now(), content: "Describe a moment of kindness you witnessed or experienced today." },
      ]);
    })
};

exports.down = function (knex) {
  return knex.schema
    .then(function () {
      return knex.schema.dropTable("journals");
    });
};
