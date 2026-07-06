import { deleteContact } from "@/app/lib/actions/deleteContact";
import { getContacts } from "@/app/lib/api/contact";
import { getFilterContacts } from "@/app/lib/api/filterContact";
import ContactList from "@/components/ContactList";

const ContactPage = async () => {
  const contacts = await getContacts();
  const filterContact = await getFilterContacts({
    search: "",
    company: "",
    sort: "newest",
  });

  return (
    <ContactList
      contacts={contacts}
      deleteContactAction={deleteContact}
      filterContact={filterContact}
    ></ContactList>
  );
};

export default ContactPage;
