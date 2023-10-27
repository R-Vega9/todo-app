exports.up = function(knex) {
  return knex.schema.createTable("todos", (table)=>{
    table.increments("id").primary();
    table.date("date");
    table.string("title")
    table.boolean("completed").defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("todos")
};
