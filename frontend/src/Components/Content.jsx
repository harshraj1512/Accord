import React, { useEffect, useState } from "react";
import { Check, SquareArrowOutUpRight, ChevronRight } from "lucide-react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAuthStore } from "../store/authStore";
import "./content.css";
import Tablepage from "./Tablepage";
const Content = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { tasklog, tasklogs, tablemonth, tablemonths } = useAuthStore();

  useEffect(() => {
    const fetchTask = async () => {
      setIsLoading(true);
      try {
        await tasklog();
        console.log("Fetched Task Logs:", tasklogs);
      } catch (error) {
        console.error("Error fetching task logs:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchMonth = async () => {
      setIsLoading(true);
      try {
        await tablemonth();
        console.log("Fetched monts Logs:", tablemonths);
      } catch (error) {
        console.error("Error fetching task logs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
    fetchMonth();
  }, []);

  

  return (
    <>
      <div className="pl-3">
        <div className="flex gap-10 ">
          {/* First Section */}
          <div className="flex flex-col gap-2 w-72">
            <div className="bg-white rounded-3xl shadow p-5">
              <div className="">
                <p className="text-black text-base ">Contract Value</p>
                <p className="text-sky-900 text-[32px] font-semibold">$2.58B</p>
                <p className="text-black text-sm font-normal">
                  No. of Contracts - 2.1k
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow p-5">
              <div className="">
                <p className="text-black text-base ">Total Contracts</p>
                <p className="text-sky-900 text-[32px] font-semibold">2,034</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow p-5 ">
              <div className="">
                <p className="text-black text-base ">Under Review</p>
                <p className="text-sky-900 text-[32px] font-semibold">50</p>
              </div>
            </div>
          </div>
          {/* Second section */}
          <div className="bg-white p-5 shadow border border-stone-300 rounded-[30px] h-[375px]">
            <div className="mb-2">
              <p className="text-black text-xl font-medium">Task Log</p>
            </div>
            {isLoading ? (
              <div className="flex gap-4 flex-col scrollbar-thin scrollbar-webkit overflow-y-auto h-[90%] pr-2">
                {tasklogs.map((title, ind) => (
                  <div
                    key={ind}
                    className="relative p-2 bg-blue-50 rounded-xl border border-sky-200 w-80 "
                  >
                    <Check
                      className="absolute top-4 right-3 text-sky-900 bg-white rounded-xl"
                      size={24}
                    />
                    <div>
                      <p
                        className={`text-black text-sm font-semibold ${
                          title.completed ? "line-through" : ""
                        }`}
                      >
                        {title.title}
                      </p>
                      <p className="text-black text-xs font-normal">
                        {title.contract}
                      </p>
                      <hr className="my-2 border-gray-300 border-t-2" />
                      <p className="text-black text-xs font-normal">
                        {title.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-[90%]">
                <div className="animate-spin w-8 h-8 border-4 border-t-sky-500 border-gray-200 rounded-full"></div>
              </div>
            )}
          </div>
          {/* Third section */}
          <div className="flex bg-white p-5 shadow border border-stone-300 rounded-[30px] h-[375px]">
            {/*First section */}
            <div>
              <p className="text-black text-xl font-medium ml-5">Calender</p>
              {/*MUI */}
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </div>
            </div>
            {/* Second section */}
            <div className="">
              <div className="flex gap-4 items-center mb-2 justify-end">
                <select className="p-2 border border-stone-300 bg-white text-black text-xs font-normal rounded-[100px] ">
                  <option disabled selected className="bg-white rounded-2xl">
                    Monthly
                  </option>
                  <option className="bg-white rounded-2xl">Date</option>
                  <option className="bg-white rounded-2xl">yearly </option>
                </select>
                <div className="p-3 bg-zinc-100 rounded-[100px]">
                  <SquareArrowOutUpRight />
                </div>
              </div>

              <div>
                <p className="text-black text-sm font-normal mb-2">
                  Upcoming Expiration
                </p>
                {isLoading ? (
                  <div className="flex gap-4 flex-col scrollbar-thin scrollbar-webkit overflow-y-auto h-20 pr-2 mb-2">
                  {tablemonths.map((title, ind) => (
                    <div
                      key={ind}
                      className="relative p-3 bg-blue-50 rounded-xl border border-sky-200 w-72 "
                    >
                      <div className="absolute flex top-3 right-3 items-center gap-2">
                        <div className="  h-[21px] px-2 bg-teal-800 rounded-full">
                          <p className="text-center text-white text-sm font-semibold">
                            {title.value}
                          </p>
                        </div>
                        <ChevronRight />
                      </div>

                      <div>
                        <p
                          className={`text-black text-sm font-semibold ${
                            title.completed ? "line-through" : ""
                          }`}
                        >
                          {title.month}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                ) : (
                  <div className="flex justify-center items-center h-[90%]">
                <div className="animate-spin w-8 h-8 border-4 border-t-sky-500 border-gray-200 rounded-full"></div>
              </div>
                )}
                
              </div>

              <div>
                <p className="text-black text-sm font-normal mb-2">
                  Upcoming Renewal
                </p>
                {isLoading ? (
                  <div className="flex gap-4 flex-col scrollbar-thin scrollbar-webkit overflow-y-auto h-20 pr-2 mb-2">
                  {tablemonths.map((title, ind) => (
                    <div
                      key={ind}
                      className="relative p-3 bg-blue-50 rounded-xl border border-sky-200 w-72 "
                    >
                      <div className="absolute flex top-3 right-3 items-center gap-2">
                        <div className="  h-[21px] px-2 bg-teal-800 rounded-full">
                          <p className="text-center text-white text-sm font-semibold">
                            {title.value}
                          </p>
                        </div>
                        <ChevronRight />
                      </div>

                      <div>
                        <p
                          className={`text-black text-sm font-semibold ${
                            title.completed ? "line-through" : ""
                          }`}
                        >
                          {title.month}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                ) : (
                  <div className="flex justify-center items-center h-[90%]">
                <div className="animate-spin w-8 h-8 border-4 border-t-sky-500 border-gray-200 rounded-full"></div>
              </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* main Table  */}
        <div>
          <Tablepage />
        </div>
      </div>
    </>
  );
};

export default Content;
