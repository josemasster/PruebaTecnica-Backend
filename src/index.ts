import express from 'express';
import cors from 'cors';
import router from './routes/routes';

import * as dotenv from 'dotenv';

//Configuracion Variable de entorno
dotenv.config({ path: './.env' });


//Configuracion Back
const app = express();
const port = process.env.PORT || 3000;

app.use(router);



app.listen(port, () => {
    console.log('Server Listenen in: ' + port);
})


