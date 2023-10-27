exports.up = function(knex) {
    return knex.schema.table("todos", (table)=>{
      table.renameColumn("id", "todo_id");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table("todos", (table)=>{
        table.renameColumn("todo_id", "id")
    })
  };
  