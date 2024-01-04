import { CiBank } from "react-icons/ci";
import { LuRotateCw } from "react-icons/lu";
import { TbRotateClockwise } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

export default function Cards() {
  return (
    <div className="flex pt-3.5">
      <div className="flex mr-5 h-24 w-60 bg-[#EEF0F8] justify-around items-center rounded-xl">
        <span className="text-4xl bg-[#657CEE] p-4 rounded-full text-white">
          <CiBank />
        </span>
        <div className="grid grid-cols-1 grid-rows-1 text-['4E4E50] font-[poppins]">
          <span>Joing</span>
          <span>(This month)</span>
          <span className="font-bold">120</span>
        </div>
      </div>

      <div className="flex mr-5 h-24 w-60 bg-[#F8F0E7] justify-around items-center rounded-xl">
        <span className="text-4xl bg-[#E6AA69] p-4 rounded-full text-white">
          <LuRotateCw />
        </span>
        <div className="grid grid-cols-1 grid-rows-1 text-['4E4E50] font-[poppins] ">
          <span>Renewal</span>
          <span>(This month)</span>
          <span className="font-bold">180</span>
        </div>
      </div>

      <div className="flex mr-5 h-24 w-60 bg-[#F9E8E8] justify-around items-center rounded-xl">
        <span className="text-4xl bg-[#DC7B7B] p-4 rounded-full text-white">
          <TbRotateClockwise />
        </span>
        <div className="grid grid-cols-1 grid-rows-1 font-[poppins] text-['4E4E50] ">
          <span>Renewal</span>
          <span>(Next Month )</span>
          <span className="font-bold">80</span>
        </div>
      </div>

      <div className="flex mr-5 h-24 w-60 bg-[#E6F2E2] justify-around items-center rounded-xl">
        <span className="text-4xl bg-[#92D268] p-4 rounded-full text-white">
          <FaUsers />
        </span>
        <div className="grid grid-cols-1 grid-rows-1 font-[poppins] text-['4E4E50] ">
          <span>Total</span>
          <span>Subscribers</span>
          <span className="font-bold">1320</span>
        </div>
      </div>
    </div>
  );
}
