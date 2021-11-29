import { useState} from 'react'

const Formulario = () => {
    const [todo, setTodo] = useState({
        todoNombre:'',
        todoDescripcion:'',
        todoSelection:'',
    });

    const handlechange = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name);
        
        setTodo({
            ...todo,
            [e.target.name] : e.target.value
        })
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
       console.log(todo)

    }
   

   
    
    return (
        <>
          <form onSubmit={handleSubmit}>
              <input 
              name='todoNombre'
              className='form-control mb-2'
              placeholder='Ingrese su name'
              onChange={handlechange}
              value={todo.todoNombre}
             
              />

              <textarea 
              name='todoDescripcion'
              className='form-control mb-2'
              placeholder='Descripcion'
              onChange={handlechange}
              value={todo.todoDescripcion}
              >
              </textarea>

              <select 
              name="todoSelection" 
              className='form-control mb-2'
              onChange={handlechange}
              value={todo.todoSelection}
              >
                  <option value="pendiente">Pendiente</option>
                  <option value="completo">Completado</option>
              </select>

             

              <button 
              className='btn btn-primary mb-2'
              
              >
                  Enviar
              </button>

          </form>  
        </>
    )
}

export default Formulario
