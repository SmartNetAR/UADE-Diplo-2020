import express from 'express';
import { getProductsList } from './controller';


const router = express.Router();

router.get( '/', getProductsList );


export default router;