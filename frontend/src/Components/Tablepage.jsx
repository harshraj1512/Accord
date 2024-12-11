import React from "react";
import { LayoutList } from "lucide-react";

const Tablepage = () => {
    const data = [
        { name: "John Doe", status: "Review", assigned: "Admin", uploaded: "Yes", activity: "Meeting", lastUpdated: "2024-12-12" },
        { name: "Jane Smith", status: "Signatured", assigned: "Manager", uploaded: "No", activity: "Report", lastUpdated: "2024-12-11" },
        { name: "Sam Wilson", status: "Review", assigned: "User", uploaded: "Yes", activity: "Survey", lastUpdated: "2024-12-10" },
        { name: "Kate Johnson", status: "Signatured", assigned: "Admin", uploaded: "No", activity: "Interview", lastUpdated: "2024-12-09" },
        { name: "Tom Brown", status: "Review", assigned: "Manager", uploaded: "Yes", activity: "Meeting", lastUpdated: "2024-12-08" },
        { name: "Lucy Adams", status: "Signatured", assigned: "User", uploaded: "No", activity: "Testing", lastUpdated: "2024-12-07" },
        { name: "Peter Clark", status: "Review", assigned: "Admin", uploaded: "Yes", activity: "Training", lastUpdated: "2024-12-06" },
        { name: "Sophie Lee", status: "Signatured", assigned: "Manager", uploaded: "No", activity: "Workshop", lastUpdated: "2024-12-05" },
        { name: "Chris King", status: "Review", assigned: "Admin", uploaded: "Yes", activity: "Conference", lastUpdated: "2024-12-04" },
        { name: "Emily Davis", status: "Signatured", assigned: "User", uploaded: "No", activity: "Event", lastUpdated: "2024-12-03" },
      ];
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
        <div className="overflow-y-auto max-h-[150px]">
        <table className="min-w-full ">
        <thead className="sticky top-0 bg-white z-10">
              <tr className=" text-start">
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">Name</th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">Status</th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">Assigned</th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">Uploaded</th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">Activity</th>
                <th className="px-4 py-2 border-b-2 text-black text-sm font-medium text-start">Last Updated</th>
              </tr>
        </thead>
          <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-start">
                  <td className="px-4 py-2 border-b-2 text-sky-500 text-base font-normal underline">{item.name}</td>
                  <td className="px-4 py-2 border-b-2 text-start">
                    <span className={`inline-block p-1.5 rounded-full mr-2 ${item.status === 'Review' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
                    {item.status}
                  </td>
                  <td className="px-4 py-2 border-b-2">{item.assigned}</td>
                  <td className="px-4 py-2 border-b-2">{item.uploaded}</td>
                  <td className="px-4 py-2 border-b-2">{item.activity}</td>
                  <td className="px-4 py-2 border-b-2">{item.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Tablepage;
