import { useState } from "react"



const Formulario = () => {

   const [todo, setTodo] = useState({
       todoNombre:'',
       todoDescripcion:'',
       todoSelection:'',
       todoCheck: false,
   }) 



   const handleSubmit = (e) =>{
       e.target.prevenDefault()
       
      
   }

   const handleChange = (e)=>{
    const {name,type,checked,value} = e.target
      
    setTodo({
           
           ...todo,
           [name]: type === 'checkbox' ? checked : value

       })
   }

   
return (
        <>
          <form onSubmit={handleSubmit}>
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
                     name='todoCheck' 
                     checked={todo.todoCheck}
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
