export const query = {
    getAllContact: "USE agenda_personal; SELECT  C.ID AS 'ID', C.NombreCompleto AS 'NombreCompleto', C.NumeroDocumento AS 'NumeroDocumento', C.Direccion AS 'Direccion', T.Numero AS 'PhoneNumber', Co.Direccion AS 'Email' FROM Contactos AS C LEFT JOIN Telefonos AS T ON C.ID = T.ContactoID LEFT JOIN Correos AS Co ON C.ID = Co.ContactoID;",
    createContact: "USE agenda_personal; INSERT INTO Contactos (NombreCompleto, NumeroDocumento, Direccion) VALUES (@fullName, @document, @direction); DECLARE @ContactoID INT; SET @ContactoID = SCOPE_IDENTITY();  INSERT INTO Telefonos (Numero, ContactoID) VALUES (@PhoneNumber, @ContactoID); INSERT INTO Correos (Direccion, ContactoID) VALUES (@Email, @ContactoID);",
 
}