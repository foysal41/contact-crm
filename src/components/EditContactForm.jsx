"use client";

import React from "react";
import { Calendar, Pencil } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { updateContact } from "@/app/lib/actions/updateContact";


const EditContactForm = ({ contact , id }) => {
  const router = useRouter();


const updateContactWrapper = async(formData) => {
    return updateContact(id, formData)
}


  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Contact
        </h1>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="font-medium text-blue-600">Contacts</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-500">Edit Contact</span>
        </div>
      </div>

      <form
        action={updateContactWrapper}
        className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
      >
        <div className="p-6 md:p-8">
          <h2 className="mb-7 text-xl font-semibold text-gray-900">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

           
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                First Name
              </label>

              <input
                name="firstName"
                defaultValue={contact.firstName}
                className="h-12 w-full rounded-lg border border-gray-300 px-4"
              />
            </div>

           
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Last Name
              </label>

              <input
                name="lastName"
                defaultValue={contact.lastName}
                className="h-12 w-full rounded-lg border border-gray-300 px-4"
              />
            </div>

           
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                name="email"
                defaultValue={contact.email}
                className="h-12 w-full rounded-lg border border-gray-300 px-4"
              />
            </div>

          
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Phone
              </label>

              <input
                name="phone"
                defaultValue={contact.phone}
                className="h-12 w-full rounded-lg border border-gray-300 px-4"
              />
            </div>

          
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Company
              </label>

              <input
                name="company"
                defaultValue={contact.company}
                className="h-12 w-full rounded-lg border border-gray-300 px-4"
              />
            </div>

           
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Job Title
              </label>

              <input
                name="jobTitle"
                defaultValue={contact.jobTitle}
                className="h-12 w-full rounded-lg border border-gray-300 px-4"
              />
            </div>

           
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Address
              </label>

              <textarea
                name="address"
                rows={3}
                defaultValue={contact.address}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

           
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Birthday
              </label>

              <div className="relative">
                <input
                  type="date"
                  name="birthday"
                  defaultValue={contact.birthday}
                  className="h-12 w-full rounded-lg border border-gray-300 px-4"
                />

                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
              </div>
            </div>

            
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Website
              </label>

              <input
                name="website"
                defaultValue={contact.website}
                className="h-12 w-full rounded-lg border border-gray-300 px-4"
              />
            </div>

            
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Notes
              </label>

              <textarea
                name="personalNote"
                rows={4}
                defaultValue={contact.personalNote}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between">

          <button
            type="button"
            onClick={() => router.back()}
            className="h-11 rounded-lg border border-gray-300 px-6 text-sm font-semibold"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
          >
            <Pencil className="size-4" />
            Update Contact
          </button>

        </div>
      </form>
    </main>
  );
};

export default EditContactForm;