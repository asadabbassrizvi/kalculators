import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa";

const data = [
  {
    name: "Jackson Smith",
    plan: "Basic",
    services: "2",
    Duration: "2 months",
    sDate: "12/5/23",
    eDate: "12/5/23",
    Amount: "$1600",
    pStatus: "Active",
    pUpdated: "Cancel Plan",
  },
  {
    name: "Jolly LLB",
    plan: "Basic",
    services: "2",
    Duration: "2 months",
    sDate: "12/5/23",
    eDate: "12/5/23",
    Amount: "$1600",
    pStatus: "Active",
    pUpdated: "Cancel Plan",
  },
  {
    name: "Mr Raaj",
    plan: "Basic",
    services: "2",
    Duration: "2 months",
    sDate: "12/5/23",
    eDate: "12/5/23",
    Amount: "$1600",
    pStatus: "Active",
    pUpdated: "Cancel Plan",
  },
  {
    name: "Deelip Kumar",
    plan: "Basic",
    services: "2",
    Duration: "2 months",
    sDate: "12/5/23",
    eDate: "12/5/23",
    Amount: "$1600",
    pStatus: "Active",
    pUpdated: "Cancel Plan",
  },
  {
    name: "John Mark",
    plan: "Basic",
    services: "2",
    Duration: "2 months",
    sDate: "12/5/23",
    eDate: "12/5/23",
    Amount: "$1600",
    pStatus: "Active",
    pUpdated: "Cancel Plan",
  },
  {
    name: "Mr Clark Mark",
    plan: "Basic",
    services: "2",
    Duration: "2 months",
    sDate: "12/5/23",
    eDate: "12/5/23",
    Amount: "$1600",
    pStatus: "Active",
    pUpdated: "Cancel Plan",
  },
];

export default function SubsDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 2;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;

  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" className="px-3 py-2">
              {" "}
              Name{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              Plan{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              Services{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              Plan Duration{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              Start Date{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              End Date{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              Amount{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              Plan Status{" "}
            </th>
            <th scope="col" className="px-3 py-2">
              {" "}
              Update Plan
            </th>
          </thead>
          <tbody>
            {records.map((data, index) => (
              <tr key={index} className=" border-b dark:border-gray-700">
                <td class="px-3 py-2">{data.name}</td>
                <td class="px-3 py-2">{data.plan}</td>
                <td class="px-3 py-2">{data.services}</td>
                <td class="px-3 py-2">{data.Duration}</td>
                <td class="px-3 py-2">{data.sDate}</td>
                <td class="px-3 py-2">{data.eDate}</td>
                <td class="px-3 py-2">{data.Amount}</td>
                <td class="px-3 py-2">{data.pStatus}</td>
                <td class="px-3 py-2">{data.pUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="mr-1 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={prePage}
                >
                  <span className="">Previous</span>
                  {/* <FaLessThan className="h-5 w-5" aria-hidden="true" /> */}
                </a>
                {numbers.map((list, index) => (
                  <a
                    href="#"
                    key={index}
                    aria-current="page"
                    className={`${
                      currentPage === list
                        ? "mr-1 relative z-10 inline-flex items-center mr-1 bg-[#B695F8] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B695F8]"
                        : "mr-1 flex items-center mr-1 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-[#B695F8] focus:outline-offset-0"
                    }`}
                    onClick={() => changeCurrentPage(list)}
                  >
                    {list}
                  </a>
                ))}

                <a
                  href="#"
                  className="ml-1 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={nextPage}
                >
                  <span className="">Next</span>
                  {/* <FaGreaterThan className="h-5 w-5" aria-hidden="true" /> */}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
