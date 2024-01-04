import { FaLessThan } from "react-icons/fa6";
import { TbMathGreater } from "react-icons/tb";
import Cards from "../components/Cards";
import RevenuChart from "../components/RevenuChart";
import SubscriberChart from "../components/SubscriberChart";
import SubsDataTable from "../components/SubsDataTable";

export function Subscription() {
  return (
    <div className="pl-10">
      <div className="flex pt-3.5 items-center justify-between">
        <div>
          <div className="flex items-center">
            <span className="text-[#666666] mr-2 text-3xl">
              <FaLessThan className="" />
            </span>
            <span className="wieght-md text-4xl font-semibold font-[Fira]">
              Subscribers
            </span>
          </div>
          <div className="flex items-center font-[poppins] text-sm pt-2">
            <span className="text-[#979797] mr-2">Admin</span>
            <span className="text-[#979797] mr-2">
              <TbMathGreater />
            </span>
            <span className="text-[#979797] mr-2">Subscription</span>
            <span className="text-black mr-2">
              <TbMathGreater />
            </span>
            <span className="text-black ">Subscribers</span>
          </div>
        </div>

        <div className="flex justify-between font-[poppins]">
          <div className="flex items-right">
            <button class="rounded-xl bg-[#0F1A31] text-white h-12 w-32">
              View Logs
            </button>
          </div>
        </div>
      </div>

      <div>
        <Cards />
      </div>
      <div className="mt-2 flex">
        <RevenuChart />
        <SubscriberChart />
      </div>
      <div>
        <SubsDataTable />
      </div>
    </div>
  );
}

export default Subscription;
