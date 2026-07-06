'use server'

const serverBaseUrl = process.env.NEXT_SERVER_URI;

export const createContact = async(newContactData) => {
    const res = await fetch(`${serverBaseUrl}/api/contacts` , {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(newContactData)
    })

    return res.json()
}