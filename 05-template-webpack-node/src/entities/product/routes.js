import express from 'express';
import { addProduct, getProductById, getProductsList } from './controller';


const router = express.Router();

router.get( '/', getProductsList );
router.get( '/:id', getProductById );
router.post( '/', addProduct );


export default router;