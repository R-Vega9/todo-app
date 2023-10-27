const knex = require("../db/connection");

function list(){
    return knex("todos").select("*")
}

function create(todo){
    return knex("todos")
    .insert(todo)
    .returning("*")
    .then((createdTodo)=> createdTodo[0])
}

function read(todoId){
    return knex ("todos")
    .select("*")
    .where({todo_id: todoId})
    .first();
}


function update(updatedTodo) {
    return knex("todos")
      .where({ todo_id: updatedTodo.todo_id })
      .update(updatedTodo)
      .returning("*")
      .then((updatedTodos) => updatedTodos[0]);
  }

function destroy(todoId){
    return knex("todos")
    .where({todo_id: todoId})
    .del()
}

module.exports ={
    list,
    read,
    create,
    update,
    delete:destroy
}