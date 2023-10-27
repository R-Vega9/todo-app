import React, {useState} from "react";

function ListItem({todos, setTodos}){

    const deleteHandler = async (todoId) => {
        try {
          const response = await fetch(`http://localhost:5000/todos/${todoId}`, {
            method: "DELETE",
          });
      
          if (response.ok) {
            setTodos((todos) => todos.filter((todo) => todo.todo_id !== todoId));
          }
        } catch (error) {
          console.error("Error while deleting a todo:", error);
        }
      };
      

    const handleToggleComplete = async (todoId, currentCompleted) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.todo_id === todoId) {
            return { ...todo, completed: !currentCompleted };
          }
          return todo;
        });
      
        setTodos(updatedTodos);
        try {
          const response = await fetch(`http://localhost:5000/todos/${todoId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({data: { completed: !currentCompleted }}),
          });
        } catch (error) {
          console.error(error);
        }
      };
      

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }

    const rows = todos.map(({todo_id, title, completed, date})=>(

        <tr key={todo_id}>
        <td className="text-center">{formatDate(date)}</td>
        <td className="fs-6 text-center" style={{textDecoration: completed ? "line-through" : ""}}>{title}</td>
        <td className="text-center">        
          <input
          className="form-check-input"
          type="checkbox"
          name="completed"
          onChange={() => handleToggleComplete(todo_id, completed)}
          checked={completed}
        />
        </td>
        <td>
        <button class="btn btn-danger" onClick={()=>deleteHandler(todo_id)}>Delete</button>
        </td>
        </tr>
    ))
    return (
        rows
    )
}
export default ListItem;