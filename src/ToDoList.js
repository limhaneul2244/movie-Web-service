import React, { useCallback, useEffect, useState } from "react";

/**
 * 
 * @returns To Do List 만들기
 */
const ToDoList = () => {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => {
        console.log(toDo)
        setToDo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === '') {
            return;
        }
        setToDo("");
        setToDos((current)=> [toDo, ...current]);
    }

    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do"/>
                <button>App To Do</button>
                <div>{toDos}</div>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index)=> <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default ToDoList;