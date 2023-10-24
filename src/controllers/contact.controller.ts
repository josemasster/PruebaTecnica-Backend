import { Request, Response } from 'express';
import { getconnection } from "../connections/database";
import { query } from '../connections/query';


//Controllers
export const getAllContact = async (req: Request, res: Response) => {
    console.log('Enter  Get')
    Database(req, res, query.getAllContact);
}

export const createContact = async (req: Request, res: Response) => {
    console.log('Enter Post')
    Database(req, res, query.createContact);
}

export const updateContact = async (req: Request, res: Response) => {
    console.log('Enter Put')
    Database(req, res, query.updateContact);

}

export const deleteContact = async (req: Request, res: Response) => {
    console.log('Enter Delete')
    Database(req, res, query.deleteContact);
}


//Functions 
function Error(error: unknown, res: Response) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode).json({
        status: statusCode,
        Error: error
    })
}



//UN TELEFONO
 async function Database(req: Request, res: Response, query: string) {
     try {
         console.log(req.body);

         const { fullName, document, direction, PhoneNumber, Email, } = req.body
         const ID = req.params.id;
         const pool = await getconnection();
         const result = await pool?.request()
             .input('ID', ID)
             .input('fullName', fullName)
             .input('document', document)
             .input('direction', direction )
             .input('PhoneNumber', PhoneNumber)
             .input('Email', Email)
             .query(query)
             res.send(result?.recordset);


     } catch (error) {
         Error(error, res)
     }
 }


//VARIOS
/*
async function Database(req: Request, res: Response, query: string) {
    try {
        console.log(req.body);
        const method = req.method;

        console.log(method)
        const { fullName, document, direction, PhoneNumbers: [], Emails: [], } = req.body
        const ID = req.params.id;
        const pool = await getconnection();
        const result = await pool?.request()
            .input('ID', ID)
            .input('fullName', fullName)
            .input('document', document)
            .input('direction', direction)

            .query(query);

            const contactID = result?.recordset[0].ID;
        if(method === 'GET' && PhoneNumbers ){
            for (const phoneNumber of PhoneNumbers ) {
                await pool?.request()
                    .input('contactID', contactID)
                    .input('phoneNumber', phoneNumber)
                    .query('INSERT INTO PhoneNumbers (ContactID, PhoneNumber) VALUES (@contactID, @phoneNumber)');
        }
    }

        res.send(result?.recordset);




    } catch (error) {
        Error(error, res)
    }
}*/