const serverBaseUrl = process.env.NEXT_SERVER_URI
export const getContacts = async () => {
    const res = await fetch(`${serverBaseUrl}/api/contacts`, {
        cache:'no-store',
    })
    return res.json();
}