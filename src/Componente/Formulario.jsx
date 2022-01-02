import { useState} from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({pintarFormulario}) => {
  
    const inicioDeFormulario = {
    Nombre: '',
    Descripcion: '',
    Selection:'',
    Prioridad: false, 
   }
   
  const [todo, setTodo] = useState(inicioDeFormulario);

  const handleChange = (e)=>{
    const {name, type, checked, value} = e.target
    setTodo({
      ...todo,
      [name] : type === 'checkbox' ? checked : value
    })
  }

  const handlesubmit = (e)=>{
    e.preventDefault()

    if(!Nombre.trim()){
    
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
     return

    }
    if(!Descripcion.trim()){
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, agregue una descripcion!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: 'Exito',
      footer: '<a href="">Why do I have this issue?</a>'
    })

    pintarFormulario({
      Nombre,
      Descripcion,
      Selection,
      Prioridad: false,
      id:uuidv4()

    })
   console.log(todo) 

   setTodo(inicioDeFormulario)
  
  }

  const {Nombre, Descripcion, Selection, Prioridad} = todo;
   

   
return (
        <>
          <form  onSubmit={handlesubmit}>
              <input 
              name='Nombre'
              className='form-control mb-2'
              placeholder='Ingrese su name'
              value={Nombre}
              onChange={handleChange}
            
             
               />
             
              
             

              <textarea 
              name='Descripcion'
              className='form-control mb-2'
              placeholder='Descripcion'
              Value={Descripcion}
              onChange={handleChange}
              >
              </textarea>

              <select 
              name="Selection" 
              className='form-control mb-2'
              value={Selection}
              onChange={handleChange}
              >
               <option value="pendiente">Pendiente</option>
               <option value="completo">Completado</option>
              </select>
              
               

              <div className="form-check">
                     <input 
                     className="form-check-input" 
                     type="checkbox"
                     name='Prioridad' 
                     checked={Prioridad}
                     onChange={handleChange}
                     
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
