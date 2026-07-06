"use client";

import {
  Bars,
  SquareListUl,
  ChartColumn,
  House,
  Star,
  Person,
  Xmark,
} from "@gravity-ui/icons";
import Link from "next/link";

import { useState } from "react";

export function DashboardSidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { icon: Person, label: "Contacts",  href: "/dashboard/contact", },
    { icon: ChartColumn, label: "Statistics", href: "/dashboard/statistics" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-40 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white lg:hidden"
      >
        <Bars />
        Menu
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-72 bg-slate-950 p-6 text-white shadow-xl lg:block">
        <SidebarContent navItems={navItems} />
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="h-full w-72 bg-slate-950 p-6 text-white shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold">Contact CRM</h2>

              <button onClick={() => setOpen(false)}>
                <Xmark />
              </button>
            </div>

            <SidebarNav navItems={navItems} />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({ navItems }) {
  return (
    <>
      <h2 className="mb-8 text-xl font-bold">Contact CRM</h2>
      <SidebarNav navItems={navItems} />
    </>
  );
}

function SidebarNav({ navItems }) {
  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:bg-blue-600"
        >
          <item.icon className="size-5" />
          <span>{item.label}</span>
        </Link>
      
      ))}
    </nav>
  );
}