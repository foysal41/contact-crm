import { getSingleContact } from "@/app/lib/api/singleContact";
import EditContactForm from "@/components/EditContactForm";

const ContactEditPage = async ({ params }) => {
  const { id } = await params;
  const contact = await getSingleContact(id);

  return <EditContactForm contact={contact} id={id} />;
};

export default ContactEditPage;