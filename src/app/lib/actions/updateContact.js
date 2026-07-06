"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const serverBaseUrl = process.env.NEXT_SERVER_URI;

export async function updateContact(id, formData) {

  const updatedContact = Object.fromEntries(formData.entries());

  const res = await fetch(`${serverBaseUrl}/api/contacts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedContact),
  });

  if (!res.ok) {
    throw new Error("Failed to update contact");
  }

  revalidatePath("/dashboard/contact");

  redirect("/dashboard/contact");
}