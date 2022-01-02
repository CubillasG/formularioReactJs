const Todo = ({item}) => {

    const {Nombre, Descripcion, Selection, Prioridad} = item
    return (
        <div>
           <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            <div className="fw-bold">{Nombre} ({Selection ? 'Completo' : 'Pendiente'})</div>
                <p>{Descripcion}</p>
             </div>
    
         </li>
        </div>
    )
}

export default Todo
