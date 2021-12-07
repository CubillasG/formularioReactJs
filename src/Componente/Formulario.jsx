import { useState } from "react";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({agregarTodos}) => {

const inicioDeFormulario = {
        nombre:'',
        description:'',
        selection:'',
        prioridad: false,
     
     }
     
const [todo, setTodo] = useState(inicioDeFormulario);

const {nombre,description,selection,prioridad} = todo;

const handleChange = (e)=>{

    const {name,value,type,checked} = e.target

    setTodo((old)=>({
        ...old,
        [name]: type === 'checked' ? checked : value,
    }))
    
  
}

const handleSubmit = (e)=>{
    e.preventDefault()
    
    if (!nombre.trim()) {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
   
    }
    Swal.fire({
        title: 'Exito!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    //   console.log(todo)

      agregarTodos({
          nombre: nombre,
          description: description,
          selection: selection,
          prioridad: false,
          id:uuidv4(),
      });

      
}

   
return (
        <>
          <form  onSubmit={handleSubmit}>
              <input 
              name='todoNombre'
              className='form-control mb-2'
              placeholder='Ingrese su name'
              onChange={handleChange}
              value={todo.todoNombre}
               />
             
              
             

              <textarea 
              name='todoDescripcion'
              className='form-control mb-2'
              placeholder='Descripcion'
              onChange={handleChange}
              value={todo.todoDescripcion}
              >
              </textarea>

              <select 
              name="todoSelection" 
              className='form-control mb-2'
              onChange={handleChange}
              value={todo.todoSelection}
              >
               <option value="pendiente">Pendiente</option>
               <option value="completo">Completado</option>
              </select>
              
               

              <div className="form-check">
                     <input 
                     className="form-check-input" 
                     type="checkbox"
                     name='todoPrioridad' 
                     onChange={handleChange}
                     checked={todo.todoPrioridad}
                     
                       />
                     
                     <label 
                     className="form-check-label" 
                     htmlFor="flexCheckDefault"
                     >Dar prioridad
                     </label>
                     
                     
             </div>
                 
                     
                     
                     
                   

             

              <button 
              className='btn btn-primary mb-2'
              type='submit'
              >
                  Enviar
              </button>
              

          </form>  
        </>
    )
}

export default Formulario
