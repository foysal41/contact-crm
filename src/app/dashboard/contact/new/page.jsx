"use client"
import React from "react";
import { Calendar, PersonPlus } from "@gravity-ui/icons";
import { createContact } from "@/app/lib/actions/contacts";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const CreateContactPage = () => {


  const formSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const contact = Object.fromEntries(formData.entries());
    
      const res = await createContact(contact)
      if(res.insertedId){
        toast.success("Contact has Been Created!")
        e.target.reset()
        redirect("/dashboard/contact")
      }

  }
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Contact</h1>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="font-medium text-blue-600">Contacts</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-500">Create Contact</span>
        </div>
      </div>

      <form onSubmit={formSubmit} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-6 md:p-8">
          <h2 className="mb-7 text-xl font-semibold text-gray-900">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Phone
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Enter phone number"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Company
              </label>
              <input
                name="company"
                type="text"
                placeholder="Enter company name"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Job Title
              </label>
              <input
                name="jobTitle"
                type="text"
                placeholder="Enter job title"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                rows="3"
                placeholder="Enter address"
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Birthday
              </label>
              <div className="relative">
                <input
                  name="birthday"
                  type="date"
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-600 outline-none focus:border-blue-500"
                />
                <Calendar className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Website
              </label>
              <input
                name="website"
                type="url"
                placeholder="Enter website URL"
                className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Notes
              </label>
              <textarea
                name="personalNote"
                rows="4"
                placeholder="Add any notes about this contact..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <button
            type="button"
            className="h-11 rounded-lg border border-gray-300 px-6 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <div className="flex gap-3">
            <button
              type="reset"
              className="h-11 rounded-lg border border-gray-300 px-6 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Reset
            </button>

            <button
              type="submit"
              className="flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              <PersonPlus className="size-4" />
              Create Contact
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateContactPage;