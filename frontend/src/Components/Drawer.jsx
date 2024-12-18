import React, { useState } from "react";
import { ChevronLeft, Ellipsis, Check, Dot, Download, Clock    } from "lucide-react";

const Drawer = ({ isOpen, onClose,contract }) => {
    
    console.log(contract);
  return (
    <>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => { onClose();}}
        ></div>
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-8/12 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* First */}
        <div className="flex mt-3 justify-between bg-white p-2">
          <div className="flex gap-3 items-center">
            <ChevronLeft onClick={() => { onClose();}} className="cursor-pointer" />
            <h1 className="text-black text-xl font-medium">{contract?.name || "No Contract Selected"}</h1>
          </div>
          <div className="">
            <Ellipsis />
          </div>
        </div>
        <hr className="my-2 border-gray-300 border-t-2" />
        {/* Second */}
        <div className="flex justify-between p-2">
          <div>
            <p className="text-black text-base font-normal">Contract Status</p>
            { contract?.status === "Signatured" && <>
            <p className="text-black text-base font-normal">
                    <span className="font-semibold">Sent for Signature</span> on 13th Sep
                </p>
                <p className="text-black text-base font-semibold underline cursor-pointer">View Details</p>
            </> 
            }
            
          </div>

          <div className="flex items-center">
            <div className="flex gap-2 items-center bg-cyan-700 px-[7.19px] h-[35.70px] rounded-[89.92px] ">
              <span className="bg-blue-50 rounded-[68.20px] ">
                <Check />
              </span>
              <p className=" text-white text-xs font-medium">Review</p>
            </div>

            { contract?.status === "Signatured"  ? <>
            
            <hr className="my-2 w-8 border-sky-400 border-t-2" />
            </>:<>
            <hr className="my-2 w-8 border-gray-300 border-t-2" />
            </>}

            <div className="flex gap-2 items-center bg-cyan-700 px-[7.19px] h-[35.70px] rounded-[89.92px]">
                { contract?.status === "Signatured" ? 
                <>
              <span className="bg-blue-50 rounded-[68.20px] ">
                <Check />
              </span>
                </> : <>
                <span className="bg-blue-50 rounded-[68.20px] border border-sky-400 ">
                <Dot />
              </span>
                </>}
              
              <p className=" text-white text-xs font-medium">
                Sent for Signature
              </p>
            </div>

            { contract?.status === "Signatured" ? <>
            
            <hr className="my-2 w-8 border-0 h-[2px] bg-gradient-to-r from-blue-500 to-gray-300" />
            </>:<>
            <hr className="my-2 w-8 border-gray-300 border-t-2" />
            </>}
            

            <div className="flex gap-2 items-center bg-cyan-700 px-[7.19px] h-[35.70px] rounded-[89.92px]">
                { contract?.status === "Signatured" ? <>
                
                <span className="bg-blue-50 rounded-[68.20px] border border-sky-400 ">
                <Dot />
              </span>
                </>: <>
                <span className=" p-2.5 bg-blue-50 rounded-[68.20px] "></span>
                </>}
              
              <p className=" text-white text-xs font-medium">
                Internal Signature
              </p>
            </div>
            <hr className="my-2 w-8 border-gray-300 border-t-2" />
            <div className="flex gap-2 items-center bg-cyan-700 px-[7.19px] h-[35.70px] rounded-[89.92px]">
              <span className="p-2.5 bg-blue-50 rounded-[68.20px] "></span>
              <p className=" text-white text-xs font-medium">Excecuted</p>
            </div>
          </div>
        </div>

        <hr className="  border-gray-300 border-t-1" />

        {contract?.status === "Signatured" ? <>
        <div className="bg-white p-2">
            <div className="flex justify-between mt-1">
                <p className="text-black text-lg font-normal">Sign Status</p>
                <p className="text-zinc-500 text-sm font-normal ">1 out 2 signatures collected</p>
            </div>
            <div className="flex justify-between mt-5">
                <p>Counterparty</p>
                <p>John</p>
                <p>Pending</p>
                <Clock />
                <Ellipsis />
            </div>
            <hr className="  border-gray-300 border-t-1" />
            <div className="flex justify-between mt-8">
                <p>Internal</p>
                <p>Jack Shane</p>
                <p>Pending</p>
                <Clock />
                <Ellipsis />
                
            </div>
            <hr className="  border-gray-300 border-t-1" />
        </div>
        </> : <>
        
        </>}
        

        {/* Third */}
        <div className=" bg-gray-200 min-h-full mt-2 p-3 relative ">
          <div className="flex justify-between items-center bg-white p-5 rounded-xl border border-stone-300">
            <div className="">
              <p className="text-black text-base font-normal">
                {contract?.name || "null"}- Version xx
              </p>
              <span className="text-black text-sm font-normal">
                Last Updated on {contract?.lastUpdated || "Null"}
              </span>
            </div>

            <div className="flex gap-3 items-center">
                { contract?.status !== "Signatured"&& <>
                <button className="p-2 px-3 border border-zinc-500 bg-white text-black text-sm font-normal rounded-[100px]  ">
                Edit Document
              </button>
                </>}

              <button className="p-2 px-3 border border-zinc-500 bg-white text-black text-sm font-normal rounded-[100px]  ">
                Preview
              </button>
              <Download />
            </div>
          </div>

          <div className="fixed bottom-0 left-0 w-full bg-white py-3 px-2 flex justify-between">
            <button onClick={() => { onClose();}} className="p-2 px-3 border border-zinc-500 bg-white text-black text-sm font-normal rounded-[100px]  ">
                Cancel
            </button>

            <button className={`p-2 px-3 bg-sky-500 text-white text-sm font-semibold rounded-[100px] ${contract?.status === "Signatured" ? "bg-sky-300 text-gray-200 cursor-not-allowed" : "bg-sky-500 text-white"}`} >
            {contract?.status === "Signatured" ? "Send for Internal Signature " : "Send for Signature"}
            </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
