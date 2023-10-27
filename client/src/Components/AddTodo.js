import React, {useState} from "react";

function AddTodo({setTodos, todos}){
    const initialFormState = {
        date: new Date(),
        title: "",
        completed: false,
    }
    const [newTodo, setNewTodo] = useState(initialFormState)

    const submitHandler = async (event) => {
        event.preventDefault();
      
        try {
          const response = await fetch(`http://localhost:5000/todos`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({data: newTodo}),
          });
        
          if (response.ok) {
            const createdTodo = await response.json();
            setTodos((todos) => [...todos, createdTodo.data]);
            setNewTodo(initialFormState);
          } else {
            console.log("Error Response:", response); // Log the response for debugging
          }
        } catch (error) {
          console.error("Error while creating a todo:", error);
        }
        
      };

      const changeHandler = (event) => {
        const { name, value } = event.target;
        setNewTodo({
          ...newTodo,
          [name]: value,
        });
      };


    return (
      <form onSubmit={submitHandler}>
      <div className="row mb-4">
        <div className="col-10">
          <input
            className="form-control"
            required
            id="title"
            type="text"
            placeholder="Input task"
            name="title"
            onChange={changeHandler}
            value={newTodo.title}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success btn-block">
            Add
          </button>
        </div>
      </div>
    </form>

    )
}

export default AddTodo;