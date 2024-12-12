import React, { useState } from "react";
import { LayoutList, ChevronRight } from "lucide-react";
import Drawer from "./Drawer";

const Tablepage = () => {
  const [drawer, setDrawer] = useState(false);
  const [selectedContract, setSelectedcontract] = useState(null);
  const data = [
    {
      name: "Contract XYZ",
      status: "Review",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "1 min ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "1 min ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Review",
      assigned: ["Ajay Kumar"],
      uploaded: "3 day ago",
      activity: "Send for signature",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Signatured",
      assigned: ["Ajay Kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Review",
      assigned: ["Ajay Kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Review",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Review",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
    {
      name: "Contract XYZ",
      status: "Signatured",
      assigned: ["Ajay Kumar", "Jay kumar"],
      uploaded: "3 day ago",
      activity: "New Version Generated",
      lastUpdated: "7 min ago",
    },
  ];
  const handleOpen = () => {
    setDrawer(true);
  };

  const handleClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <div className="container bg-white mt-4 p-5 rounded-[25px] shadow border border-stone-300">
        {/* Buttons Row */}
        <div className="flex justify-between">
          <div className="flex space-x-4 mb-4">
            <button className="flex gap-2 text-center items-center bg-sky-900 text-white text-sm font-semibold px-3 py-2 rounded-[100px] border border-stone-300">
              <span>
                <LayoutList size={18} />
              </span>
              Name
              <span className="px-1 py-0.5 rounded-[100px] bg-white text-black text-xs font-medium">
                23
              </span>
            </button>

            <button className="flex gap-2 text-center items-center bg-white text-black text-sm font-normal px-3 py-2 rounded-[100px] border border-stone-300">
              <span>
                <LayoutList size={18} />
              </span>
              Participating
              <span className="px-1 py-0.5 rounded-[100px] bg-neutral-200 text-black text-xs font-medium">
                10
              </span>
            </button>

            <button className="flex gap-2 text-center items-center bg-white text-black text-sm font-normal px-3 py-2 rounded-[100px] border border-stone-300">
              <span>
                <LayoutList size={18} />
              </span>
              All Contract
              <span className="px-1 py-0.5 rounded-[100px] bg-neutral-200 text-black text-xs font-medium">
                10
              </span>
            </button>

            <button className="flex gap-2 text-center items-center bg-white text-black text-sm font-normal px-3 py-2 rounded-[100px] border border-stone-300">
              <span>
                <LayoutList size={18} />
              </span>
              Completed
              <span className="px-1 py-0.5 rounded-[100px] bg-neutral-200 text-black text-xs font-medium">
                10
              </span>
            </button>
          </div>

          <div className="">
            <button className="p-2 px-3 border border-stone-300 bg-white text-black text-xs font-normal rounded-[100px]  ">
              filter
            </button>

            <select className="p-2 border border-stone-300 bg-white text-black text-xs font-normal rounded-[100px] ml-2 ">
              <option disabled selected className="bg-white rounded-2xl">
                View
              </option>
              <option className="bg-white rounded-2xl">Date</option>
              <option className="bg-white rounded-2xl">yearly </option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-y-auto scrollbar-thin max-h-[150px]">
          <table className="min-w-full ">
            <thead className="sticky top-0 bg-white z-10">
              <tr className=" text-start">
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">
                  Name
                </th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">
                  Status
                </th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">
                  Assigned
                </th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">
                  Uploaded
                </th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">
                  Activity
                </th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">
                  Last Updated
                </th>
                <th className="border-b-2 text-black text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-start">
                  <td className="px-4 py-2 border-b-2 text-sky-500 text-base font-normal underline cursor-pointer">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border-b-2 text-start">
                    <span
                      className={`inline-block p-1.5 rounded-full mr-2 ${
                        item.status === "Review"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    ></span>
                    {item.status}
                  </td>
                  <td className="px-4 py-2 border-b-2 ">
                    {item.assigned
                      .map((name) => {
                        const initials = name
                          .split(" ").map((word) => word[0].toUpperCase()).join("");
                        return (
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm text-white font-semibold mr-2 ${initials === "AK" ? "bg-cyan-700" : "bg-amber-500"}`}>{initials}</span>
                        );
                      })}
                  </td>

                  <td className="px-4 py-2 border-b-2">{item.uploaded}</td>
                  <td className="px-4 py-2 border-b-2">{item.activity}</td>
                  <td className="px-4 py-2 border-b-2">{item.lastUpdated}</td>
                  <td
                    onClick={handleOpen}
                    className=" border-b-2 cursor-pointer"
                  >
                    <ChevronRight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Drawer isOpen={drawer} onClose={handleClose} />
    </>
  );
};

export default Tablepage;
