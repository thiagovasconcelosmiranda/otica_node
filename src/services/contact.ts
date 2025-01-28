import { prisma } from "../utils/prisma";

export const addContactServices = async (data: any) =>{
    let date = new Date();
    
    const newContact = await prisma.contacts.create({
        data:{
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            description: data.description,
            date: date
        }
    });
    
   return newContact;
}