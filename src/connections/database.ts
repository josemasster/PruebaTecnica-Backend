import sql from 'mssql';
import * as dotenv from 'dotenv';

//Configuracion Variable de entorno
dotenv.config({ path: './.env' });


//Conversion del valor del puerto en la variable de entorno a tipo number
const dbPort = process.env.DB_PORT;
let PORT
if(dbPort){
     PORT = parseInt(dbPort, 10);
}


//Configuracion de las credenciales de la base de datos
const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST||'localhost',
    database: process.env.DB||'BD_PruebaTecnica',
    port: PORT ,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false, 
    }
};

//Conexion a base de datos
export async function getconnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}




export { sql };

