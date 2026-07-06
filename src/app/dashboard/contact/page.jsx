import { deleteContact } from "@/app/lib/actions/deleteContact";
import { getContacts } from "@/app/lib/api/contact";
import ContactList from "@/components/ContactList";

const ContactPage = async ({ searchParams }) => {

  const params = await searchParams;

  const contacts = await getContacts({
    search: params.search || "",
    favorite: params.favorite || "",
    sort: params.sort || "newest",
    page: Number(params.page) || 1,
    limit: 10,
  });

  return (
    <ContactList
      contacts={contacts}
      deleteContactAction={deleteContact}
    />
  );
};

export default ContactPage;