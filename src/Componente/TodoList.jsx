import { useState } from "react";
import Formulario from "./Formulario";


const TodoList = () => {
    const [todos, setTodo] = useState([]);

const agregarTodos = (todo)=>{
    console.log(todo)
    setTodo((old)=>[
        ...old,
        todo
    ]);

}
    return (
        <>
         < Formulario agregarTodos={agregarTodos}/>   
        </>
    )
}

export default TodoList


