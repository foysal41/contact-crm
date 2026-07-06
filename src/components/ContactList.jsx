"use client";
import React from "react";
import {
  Eye,
  Pencil,
  TrashBin,
  Plus,
  Funnel,
  Magnifier,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "@gravity-ui/icons";
import Link from "next/link";
import { deleteContact } from "@/app/lib/actions/deleteContact";
import { useRouter, useSearchParams } from "next/navigation";

const ContactList = ({ contacts, deleteContactAction }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handleDelete = async (contactId) => {
    await deleteContactAction(contactId);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/dashboard/contact?${params.toString()}`);
  };

 const handleSort = (e) => {
  const params = new URLSearchParams(searchParams);

  params.set("sort", e.target.value);

  router.push(`/dashboard/contact?${params.toString()}`);
};

  const handleFavorite = (e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("favorite", e.target.value);
    } else {
      params.delete("favorite");
    }

    router.push(`/dashboard/contact?${params.toString()}`);
  };

  const handlePage = (page) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page);

    router.push(`/dashboard/contact?${params.toString()}`);
  };
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-6 md:px-10">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Contacts</h1>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="font-medium text-blue-600">Dashboard</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-500">Contacts</span>
          </div>
        </div>

        <Link href={"/dashboard/contact/new"}>
          <button className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
            <Plus className="size-4" />
            Add Contact
          </button>
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:w-[430px]">
            <Magnifier className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              defaultValue={searchParams.get("search") || ""}
              onChange={handleSearch}
              placeholder="Search contacts by name, email, phone..."
              className="h-11 w-full rounded-md border border-slate-300 pl-11 pr-4 text-sm text-slate-700 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-3">           

            <select
              defaultValue={searchParams.get("favorite") || ""}
              onChange={handleFavorite}
              className="h-11 rounded-md border border-slate-300 px-4 text-sm"
            >
              <option value="">All Contacts</option>
              <option value="1">Favorite</option>
            </select>

            <select
              defaultValue={searchParams.get("sort") || "newest"}
              onChange={handleSort}
              className="h-11 rounded-md border border-slate-300 px-4 text-sm text-slate-700"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1300px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-semibold text-slate-700">
                <th className="w-12 px-6 py-4">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-slate-300"
                  />
                </th>

                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4">Phone</th>
                <th className="px-4 py-4">Company</th>
                <th className="px-4 py-4">Job Title</th>
                <th className="px-4 py-4">Address</th>
                <th className="px-4 py-4">Birthday</th>
                <th className="px-4 py-4">Website</th>
                <th className="px-4 py-4">Personal Note</th>

                {/* Extra Status */}
                <th className="px-4 py-4">Status</th>

                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="size-4 rounded border-slate-300"
                    />
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600">
                        {`${contact.firstName?.[0] || ""}${
                          contact.lastName?.[0] || ""
                        }`}
                      </div>

                      <span className="font-semibold text-slate-900">
                        {contact.firstName} {contact.lastName}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-slate-700">
                    {contact.email || "-"}
                  </td>

                  <td className="px-4 py-4 text-slate-700">
                    {contact.phone || "-"}
                  </td>

                  <td className="px-4 py-4 text-slate-700">
                    {contact.company || "-"}
                  </td>

                  <td className="px-4 py-4 text-slate-700">
                    {contact.jobTitle || "-"}
                  </td>

                  <td className="px-4 py-4 text-slate-700">
                    {contact.address || "-"}
                  </td>

                  <td className="px-4 py-4 text-slate-700">
                    {contact.birthday || "-"}
                  </td>

                  <td className="px-4 py-4 text-blue-600">
                    {contact.website ? (
                      <a
                        href={contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.website}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td className="px-4 py-4 text-slate-700">
                    {contact.personalNote || "-"}
                  </td>

                  {/* Extra Status */}
                  <td className="px-4 py-4">
                    <button className="rounded-md bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
                      ● Contact
                    </button>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-4">
                      <Link href={`/dashboard/contact/${contact._id}`}>
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="size-4" />
                        </button>{" "}
                      </Link>

                     <Link href={`/dashboard/contact/${contact._id}/edit`} >
                       <button className="text-blue-600 hover:text-blue-800">
                        <Pencil className="size-4" />
                      </button>
                     </Link>

                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashBin className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>Showing 1 to {contacts.length} contacts</p>

          <div className="flex items-center gap-2">
            {/* <button className="flex size-9 items-center justify-center rounded-md border border-slate-300 hover:bg-slate-50">
              <ChevronLeft className="size-4" />
            </button> */}

            {/* <button className="flex size-9 items-center justify-center rounded-md border border-slate-300 hover:bg-slate-50">
              <ChevronRight className="size-4" />
            </button> */}

            <button
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex size-9 items-center justify-center rounded-md border border-slate-300 hover:bg-slate-50"
            >
              <ChevronLeft className="size-4" />
            </button>

            <button className="flex size-9 items-center justify-center rounded-md bg-blue-600 text-white">
              {currentPage}
            </button>

            <button
              onClick={() => handlePage(currentPage + 1)}
              className="flex size-9 items-center justify-center rounded-md border border-slate-300 hover:bg-slate-50"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
