const serverBaseUrl = process.env.NEXT_SERVER_URI;

export const getSingleContact = async (id) => {
  const res = await fetch(`${serverBaseUrl}/api/contacts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contact");
  }

  return res.json();
};