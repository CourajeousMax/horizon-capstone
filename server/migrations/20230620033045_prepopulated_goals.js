/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex("goals").insert([
    { user_id: 1, title: "Drink a cup of water", description: "Stay hydrated by drinking a cup of water." },
    { user_id: 1, title: "Take a 10-Minute Walk", description: "Go for a short walk outside for at least 10 minutes." },
    { user_id: 1, title: "Make your bed", description: "Start your day by organizing your space." },
    {user_id: 1,title: "Meditate",description: "Take a few minutes to practice mindfulness.",},
    { user_id: 1, title: "Write in a Gratitude Journal", description: "Take a moment to write down things you are grateful for." },
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex("goals").delete();
};
