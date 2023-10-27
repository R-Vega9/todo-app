import React,{useState} from "react";

function ListHeader({todos, showList, setShowList}){
    const handleClick = () =>{
        setShowList(!showList)
    }

return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
            <h1 className="display-1 pt-5 pb-3"> 🗓️ Weekly To Do</h1>
                <button className="btn btn-primary btn-lg " onClick={handleClick}>{!showList ? "Get To Work": "Take A Break"}</button>
                {todos.length > 0 ? (
                    <h2 className="display-8 pt-4 pb-4" >You Have {todos.length} Tasks On Your To Do List</h2>
                ) : null}
            </div>

        </div>
    </div>
)
}

export default ListHeader;