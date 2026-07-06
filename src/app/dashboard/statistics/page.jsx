import { getContacts } from "@/app/lib/api/contact";

const StatisticsPage = async () => {
  const contacts = await getContacts();


  const totalContacts = contacts.length;

  const totalFavorites = contacts.filter(
    (contact) => contact.favorite === true
  ).length;

  
  const totalCompanies = new Set(
    contacts
      .map((contact) => contact.company)
      .filter((company) => company)
  ).size;

 
  const totalWebsite = contacts.filter(
    (contact) => contact.website
  ).length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="rounded-lg bg-white p-6 shadow">
        <h2>Total Contacts</h2>
        <p className="text-4xl font-bold">{totalContacts}</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2>Favorite Contacts</h2>
        <p className="text-4xl font-bold">{totalFavorites}</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2>Total Companies</h2>
        <p className="text-4xl font-bold">{totalCompanies}</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2>Website Added</h2>
        <p className="text-4xl font-bold">{totalWebsite}</p>
      </div>

    </div>
  );
};

export default StatisticsPage;