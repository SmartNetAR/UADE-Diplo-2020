import tasksRoutes from './entities/task/routes';
import productsRoutes from './entities/product/routes';


const router = ( app ) => {
    app.use( '/tasks', tasksRoutes );
    app.use( '/products', productsRoutes );
}

export default router;