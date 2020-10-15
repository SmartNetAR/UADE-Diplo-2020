import express from 'express';
import morgan from 'morgan';
import router from './router';

const app = express();
app.use( morgan('dev') );

router( app );

app.listen( 3000, ()=> {
    console.log("running");

} )



