import React, {useState} from "react";
import ListItem from "./ListItem"; 


function ListTodos({showList, setTodos, todos}){
    if (showList){
        return (
            <table className="table table-hover">
                <thead className="col">
                    <tr>
                        <th className="col text-center fs-5">Date</th>
                        <th className="col-6 text-center fs-5">Task</th>
                        <th className="col text-center fs-5">Completed</th>
                        <th className="col-1"></th>

                    </tr>
                </thead>
                <tbody>
                    <ListItem todos={todos} setTodos={setTodos}/>
                </tbody>
            </table>
        )
    } else {
        return null;
    }
}

export default ListTodos;