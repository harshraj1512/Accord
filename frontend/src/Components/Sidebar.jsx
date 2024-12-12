import React, { useState } from 'react';
import { Home, LibraryBig, ChartPie, Files, ListChecks, Settings, HelpCircle } from 'lucide-react';
import Control from "../assets/control.png";
import Company from "../assets/company.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Home");

  
  const topItems = [
    { name: "Home", icon: <Home size={24} /> },
    { name: "Library", icon: <LibraryBig size={24} /> },
    { name: "Chart", icon: <ChartPie size={24} /> },
    { name: "Files", icon: <Files size={24} /> },
    { name: "List", icon: <ListChecks size={24} /> },
  ];

  const bottomItems = [
    { name: "Help", icon: <HelpCircle size={24} /> },
    { name: "Settings", icon: <Settings size={24} /> },
  ];

  return (
    <>
    <div>
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 p-5 pt-8 h-screen relative flex flex-col justify-between bg-gray-200 z-20`}
    >
      {/* Top Section */}
      <div>
        <img
          src={Control}
          className={`absolute cursor-pointer right-3 top-20 w-7 border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src={Company} className="cursor-pointer duration-500" />
          <h1
            className={`text-sky-900 origin-left font-bold text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            AccordIQ
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="mt-10 space-y-4">
          {topItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-x-4 cursor-pointer p-2 rounded-full ${
                selected === item.name ? "bg-sky-900" : "bg-white"
              }`}
              onClick={() => setSelected(item.name)}
            >
              <div
                className={`text-xl ${
                  selected === item.name ? "text-white" : "text-sky-900"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={` font-medium duration-300 ${!open && "hidden"} ${
                  selected === item.name ? "text-white" : "text-sky-900"
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Items */}
      <ul className="space-y-4">
        {bottomItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-x-4 cursor-pointer p-2 rounded-full ${
              selected === item.name ? "bg-sky-900" : "bg-white"
            }`}
            onClick={() => setSelected(item.name)}
          >
            <div
              className={`text-xl ${
                selected === item.name ? "text-white" : "text-sky-900"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={` font-medium duration-300 ${!open && "hidden"} ${
                selected === item.name ? "text-white" : "text-sky-900"
              }`}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default Sidebar;
