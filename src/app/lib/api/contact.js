const serverBaseUrl = process.env.NEXT_SERVER_URI;

export const getContacts = async ({search = "",favorite = "",sort = "newest",page = 1,limit = 10,} = {}) => 
{

  const params = new URLSearchParams({search,favorite,sort,page,limit,});
 console.log(params)

  const res = await fetch(
    `${serverBaseUrl}/api/contacts?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};