/* eslint-disable react/prop-types */
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbBrandShazam } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BsMenuButtonWide } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import MainContainer from "./MainContainer";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const routes = [
  { id: 1, path: "/", name: "Dashboard", icon: <MdOutlineSpaceDashboard /> },
  { id: 2, path: "/analytics", name: "Analytics", icon: <TbDeviceAnalytics /> },
  { id: 3, path: "/menu", name: "Menu", icon: <BsMenuButtonWide /> },
  { id: 4, path: "/messages", name: "Messages", icon: <LuMessageSquare /> },
  {
    id: 5,
    path: "/notification",
    name: "Notification",
    icon: <IoMdNotificationsOutline />,
  },

  { id: 6, path: "/users", name: "Users", icon: <FiUsers /> },
  { id: 7, path: "/setting", name: "Setting", icon: <AiOutlineSetting /> },
];

const Sidebar = ({ children }) => {
  const [active, setActive] = useState("1");
  const handleTabClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <>
      <div className="main-container">
        <div className="side-bar">
          <div className="side">
            <div className="logo">
              <TbBrandShazam />
            </div>
            <section className="routes">
              {routes.map((route, index) => (
                <>
                  <div className="icons">
                    <NavLink
                      className="icon"
                      to={route.path}
                      id={route.id}
                      disabled={active === `${route.id}`}
                      onClick={handleTabClick}
                      key={index}
                    >
                      {route.icon}
                    </NavLink>
                  </div>
                </>
              ))}
            </section>
          </div>
          <div className="logout_icons">
            <AiOutlineExclamationCircle />
            <FiLogOut />
          </div>
        </div>
        <main className="main_sidebar">{children}</main>
        <MainContainer />
      </div>
    </>
  );
};

export default Sidebar;
