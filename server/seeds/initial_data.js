const users = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Smith", email: "jane@example.com" },
];

// Export the seed data
exports.seed = function (knex) {
  // Deletes all existing entries for the specified table
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(users);
    });
};
