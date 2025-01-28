import { Request, Response } from "express";
import { addContactServices } from '../services/contact';

export const addContact = async (req: Request, res: Response) => {
    const { firstname, lastname, email, phone, description } = req.body;

    if (firstname && lastname &&
        email && phone && description
    ) {
       
        const newContact = await addContactServices(req.body);
        if (newContact) {
            res.json({status: 'Contato enviado com sucesso!'}); 
        }else{
            res.json({status: 'Erro ao enviar contato!'}); 
        }
    }
}