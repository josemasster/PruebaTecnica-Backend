 import { Request, Response } from 'express';

 export const errorHandler  = (error:Error,req:Request, res:Response ,)=>{
     const statusCode = res.statusCode === 200 ? 500 : res.statusCode
     res.status(statusCode)
     console.log(statusCode,error.message)
     res.json({
         status:statusCode,
         Error:error.message
     })
 }