import express from 'express';
import { getAllContact, createContact,   } from '../controllers/main.controller';



//Configuracion de Los Endpoints
const router = express.Router();
router.use(express.json());


//Endpoints
router.get('/contact', getAllContact, )
router.post('/contact', createContact, )


export default router;

