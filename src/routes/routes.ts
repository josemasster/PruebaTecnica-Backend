import express from 'express';
import { getAllContact, createContact, updateContact, deleteContact,   } from '../controllers/main.controller';
import { errorHandler } from '../middlewere/errors';


//Config Endpoints
const router = express.Router();
router.use(express.json());


//Endpoints
router.get('/contact', getAllContact);
router.post('/contact', createContact);
router.put('/contact/:id', updateContact);


export default router;

