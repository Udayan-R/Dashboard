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

// eslint-disable-next-line no-unused-vars
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <TbDeviceAnalytics />,
  },
  {
    path: "/menu",
    name: "Menu",
    icon: <BsMenuButtonWide />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <LuMessageSquare />,
  },
  {
    path: "/notification",
    name: "Notification",
    icon: <IoMdNotificationsOutline />,
  },

  {
    path: "/users",
    name: "Users",
    icon: <FiUsers />,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <AiOutlineSetting />,
  },
];

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <div className="side-bar">
          <div className="logo">
            <TbBrandShazam />
          </div>
          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name}>
                <div className="icons">
                  <li className="icon">{route.icon}</li>
                </div>
              </NavLink>
            ))}
            <div className="logout_icons">
              <AiOutlineExclamationCircle />
              <FiLogOut />
            </div>
          </section>
        </div>
        <main className="main_sidebar">{children}</main>
        <MainContainer />
      </div>
    </>
  );
};

export default Sidebar;
