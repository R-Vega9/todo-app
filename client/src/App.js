import "./App.css";
import React, {useEffect, useState} from "react";
import ListHeader from "./Components/ListHeader";
import ListTodos from "./Components/ListTodos";
import ListItem from "./Components/ListItem";
import AddTodo from "./Components/AddTodo";
const API_BASE_URL =
  process.env.REACT_APP_URL

function App() {
  const [todos, setTodos] = useState([]);

  const [showList, setShowList] = useState(false);

  useEffect(()=>{
    setTodos([]);
    const abortController = new AbortController();
    async function loadTodos(){
      try {
        const response = await fetch(`${API_BASE_URL}/todos`, 
        {signal: abortController.signal});
        const todosFromApi = await response.json();
        setTodos(todosFromApi.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    loadTodos();
    return () => abortController.abort()
  }, [])

  return (
    <div className="container">
      <ListHeader setShowList = {setShowList} showList = {showList} todos = {todos}/>
      <AddTodo setTodos={setTodos} todos={todos}/>
      <ListTodos setTodos = {setTodos} todos={todos} showList={showList}/>
    </div>
  )
}

export default App;