'use server';

import { revalidatePath } from "next/cache";

const serverBaseUrl = process.env.NEXT_SERVER_URI;
export const deleteContact = async(contactId) => {
    

    const res = await fetch(`${serverBaseUrl}/api/contact/${contactId}`, {
        method: "DELETE"
    })
    const data = await res.json();
    // console.log('after delete' , data)

    if(data.deletedCount > 0){
        revalidatePath('/dashboard/contact')
    }

    return data;


}