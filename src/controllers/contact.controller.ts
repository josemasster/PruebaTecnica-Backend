import { Request, Response } from 'express';
import { getconnection } from "../connections/database";
import { query } from '../connections/query';


//Controllers
export const getAllContact = async (req: Request, res: Response) => {
    console.log('Enter Peticion get')
    Database(req, res, query.getAllContact);
}

export const createContact = async (req: Request, res: Response) => {
    console.log('Enter Peticion post')
    Database(req, res, query.createContact);
}



//Functions 

async function Database(req: Request, res: Response, query: string) {

    console.log(req.body)
    const { fullName, document, direction, PhoneNumber, Email } = req.body
    const ID = req.params.id;
    const pool = await getconnection();
    const result = await pool?.request()
        .input('ID', ID)
        .input('fullName', fullName)
        .input('document', document)
        .input('direction', direction)
        .input('PhoneNumber', PhoneNumber)
        .input('Email', Email)
        .query(query)
    console.log(result)
    res.send(result?.recordset);

}