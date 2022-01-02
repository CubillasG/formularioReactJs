import { useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"


const TodoList = () => {
    
    const [todos, setTodos] = useState([])

    const pintarFormulario = todo =>{
        console.log(todo)
        setTodos((old)=>[
            ...old,
            todo
        ])
    }
  
    return (
        <>

        < Formulario pintarFormulario={pintarFormulario}/>
        
            <ul className="list-group list-group-numbered mt-2" >

           
            {todos.map(item =>(
            < Todo key={item.id} item={item}/>    
            
            ))}
            </ul>
        
        </>
    )
}

export default TodoList


