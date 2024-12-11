import React from "react";
import Sidebar from "./Sidebar";
import { BellDot, SquareCheckBig } from "lucide-react"; // Importing Lucide icons

const Navbar = () => {
  return (
    <>
      <div className="w-full ">
        <div className="navbar bg-gray-200">
          <div className="flex-1">
            <label className="input input-bordered flex items-center gap-2 rounded-full">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex-none flex items-center gap-4">
          <div>
                {/* Upload */}
                <button className="btn flex items-center justify-center bg-sky-500 hover:bg-sky-700 rounded-full text-white text-lg gap-2 px-6 py-2">
                  <span className="text-2xl">+</span>
                  <span>Upload</span>
                </button>
              </div>
              {/* Task Icon */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle hover:bg-sky-200"
                >
                  <div className="indicator">
                    <BellDot size={24} className="text-sky-900 " />
                  </div>
                </div>
              </div>
              {/* Notification Icon */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle hover:bg-sky-200"
                >
                  <div className="indicator">
                    <SquareCheckBig size={24} className="text-sky-900" />
                  </div>
                </div>
              </div>
            <div className="dropdown dropdown-end">
              
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
