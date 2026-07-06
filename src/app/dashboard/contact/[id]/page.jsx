import { getSingleContact } from "@/app/lib/api/singleContact";



export default async function ContactDetails({ params }) {
  const { id } = await params;
 
  const contact = await getSingleContact(id)
 

  return (
    <div className="p-10">
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>

      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Company: {contact.company}</p>
      <p>Job Title: {contact.jobTitle}</p>
      <p>Address: {contact.address}</p>
      <p>Birthday: {contact.birthday}</p>
      <p>Website: {contact.website}</p>
      <p>Note: {contact.personalNote}</p>
    </div>
  );
}