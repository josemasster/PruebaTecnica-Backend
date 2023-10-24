import express from 'express';
import { getAllContact, createContact, updateContact, deleteContact,   } from '../controllers/main.controller';
import { errorHandler } from '../middlewere/errors';


//Config Endpoints
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true, limit: '500mb' }))

//Endpoints
router.get('/contact', getAllContact, errorHandler)
router.post('/contact', createContact, errorHandler)
router.put('/contact/:id', updateContact, errorHandler)
router.delete('/contact/:id', deleteContact, errorHandler)

export default router;

