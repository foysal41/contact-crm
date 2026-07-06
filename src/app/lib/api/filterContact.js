const serverBaseUrl = process.env.NEXT_SERVER_URI;

export const getFilterContacts = async ({
  search = "",
  company = "",
  sort = "newest",
} = {}) => {

  const params = new URLSearchParams({
    search,
    company,
    sort,
  });

  const res = await fetch(
    `${serverBaseUrl}/api/contacts?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};