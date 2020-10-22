import express from 'express';
import morgan from 'morgan';
import router from './router';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use( morgan('dev') );

app.use( express.urlencoded( { extended:true } ) ) ;
app.use( express.json() ) ;

router( app );

const port = process.env.NODE_PORT;

console.log(process.env.NODE_PORT);
console.log(process.env.DB_NAME);



app.listen( port, ()=> {
    console.log("running on port " + port);

} )



