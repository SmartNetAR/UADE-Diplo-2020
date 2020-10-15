import express from 'express';

const router = express.Router();

router.get( '/', ( req, res ) => { res.json( { tasks: [] } ) });
router.get( '/:id', ( req, res ) => {
    res.json({
        id: req.params.id,
        title: "Título de la tarea",
        description: "Descripción de la tarea"
    })
} )


export default router;