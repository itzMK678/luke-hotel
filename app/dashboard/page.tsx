"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import Orders from "./Orders/page";
import Queries from "./Queries/page";

const Dashboard = () => {
  const [active, setActive] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menu = [
    { name: "Orders", tab: 1, icon: "📝" },
    { name: "Queries", tab: 2, icon: "📞" },
  ];

  let content;
  if (active === 1) content = <Orders />;
  if (active === 2) content = <Queries />;

  return (
    <div className="min-h-screen bg-blue-300 text-blue-600 flex flex-col">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur-md border-b border-blue-200 p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden text-blue-800"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 left-0 w-64 p-6
          bg-white/40 backdrop-blur-lg border-r border-white/30 shadow-xl
          transform transition-transform duration-300 ease-in-out z-20
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <h2 className="text-xl font-semibold text-blue-800 mb-6">
            Navigation
          </h2>

          <nav className="space-y-3">
            {menu.map((item) => (
              <button
                key={item.tab}
                onClick={() => {
                  setActive(item.tab);
                  setIsSidebarOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all
                ${
                  active === item.tab
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-600 hover:bg-blue-300"
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 min-h-[80vh]">
            {content}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
