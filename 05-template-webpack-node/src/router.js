import tasksRoutes from './entities/task/routes';


const router = ( app ) => {
    app.use( '/tasks', tasksRoutes );

}

export default router;