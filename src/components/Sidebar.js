import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdPeopleAlt, MdPayment } from "react-icons/md";
import { FaBriefcase, FaSimCard, FaRegUserCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";
import { DiAptana } from "react-icons/di";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const menu = [
    { title: "Dashboard", icon: <RiDashboardFill />, path: "/dashboad" },
    {
      title: "Bussiness",
      icon: <FaBriefcase />,
      headings: "Realations",
      path: "/bussiness",
    },
    { title: "Clients", icon: <MdPeopleAlt />, path: "/clients" },
    {
      title: "Team Management",
      icon: <FaPeopleGroup />,
      path: "/team-management",
    },
    { title: "Subscription", icon: <FaSimCard />, path: "/" },
    { title: "Payments", icon: <MdPayment />, path: "/payments" },
    {
      title: "Settings",
      icon: <DiAptana />,
      headings: "Support",
      path: "/settings",
    },
    {
      title: "Help & Support",
      icon: <VscLightbulbAutofix />,
      path: "/help & support",
    },
    {
      title: "User",
      headings: "Profile",
      icon: <FaRegUserCircle />,
      path: "/user",
    },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-[#0F1A31] pl-4 pr-4 pt-8 ${
          isOpen ? "w-100" : "w-17"
        } relative duration-300`}
      >
        <BsArrowLeftShort
          className={`bg-white text-black text-2xl rounded-full absolute -right-3 top-9 cursor-pointer ${
            !isOpen && "rotate-180"
          }`}
        />
        <div>
          <div className="text-white text-center font-medium text-4xl ">
            {!isOpen ? "S" : "Synkli"}
          </div>

          <div>
            <ul className="pt-6">
              {menu.map((menu, index) => {
                return (
                  <div key={index}>
                    {menu.headings && (
                      <div
                        className={`text-[#979797] font-[poppins] pl-12 mt-4 ${
                          !isOpen && "hidden"
                        }`}
                      >
                        {menu.headings}
                      </div>
                    )}

                    <NavLink
                      to={`${menu.path}`}
                      className="flex hover:text-black gap-x-4 active:bg-white-600 text-xl text-white bg-transparent
                        item-center cursor-pointer p-2 text-sm  hover:bg-white rounded-md mt-2"
                    >
                      <span className="text-xl span">{menu.icon}</span>

                      <span
                        className={`text-white span text-sm font-[poppins] font-medium flex-1 hover:text-black ${
                          !isOpen && "hidden"
                        }`}
                      >
                        {menu.title}
                      </span>
                    </NavLink>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
