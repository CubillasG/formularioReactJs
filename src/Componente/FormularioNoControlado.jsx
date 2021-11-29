import { useRef } from "react"

const FormularioNoControlado = () => {

  const formulario = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('en proceso...')
  }

    return (
        <>
          <h2>Formulario no controlado</h2>  

          <form ref={formulario} onSubmit={handleSubmit}> 
            <input
              type="text"
              className='form-control mb-2'
              name='todoEntrada'
              placeholder='Ingres su nombre' />

              <textarea
              name='todoDescripcion'
              className='form-control mb-2'
              placeholder='Ingrese la descripcion'
              >
              </textarea>

              <select 
              name="todoSelector"
              className='form-select mb-4'
              >
                <option value="pendiente">Pendiente</option>
                 <option value="completo">Completo</option>
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

export default FormularioNoControlado
