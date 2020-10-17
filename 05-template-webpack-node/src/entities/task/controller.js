

export const getAllTasks = ( req, res ) => {
    res.json( { data: [{
        id: 1,
        title: "Título de la tarea",
        description: "Descripción de la tarea"
    }] } ) 
}

export const getTaskById = ( req, res ) => {
    res.json({
        id: req.params.id,
        title: "Título de la tarea",
        description: "Descripción de la tarea"
    })
}