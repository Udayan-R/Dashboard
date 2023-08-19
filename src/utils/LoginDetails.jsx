import { GoArrowSwitch } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { SlGraph } from "react-icons/sl";
import { FiHelpCircle } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

import { styled } from "styled-components";

const userLinks = [
  {
    name: "Switch accounts",
    icon: <GoArrowSwitch />,
  },
  {
    name: "Manage accounts",
    icon: <FiUsers />,
  },
  {
    name: "Profile",
    icon: <AiOutlineUser />,
  },
  {
    name: " Activity",
    icon: <SlGraph />,
  },
  {
    name: "Settings",
    icon: <FiSettings />,
  },
  {
    name: "Help",
    icon: <FiHelpCircle />,
  },
  {
    name: "Logout",
    icon: <LuLogOut />,
  },
];

const UserBox = styled.div`
  background: #1b1d21;
  position: absolute;
  right: 2rem;
  top: 10rem;
  padding: 2rem;
  border-radius: 2rem;
  z-index: 100;
`;

const UserD = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  padding: 1.4rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #525151;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  gap: 1rem;
`;

const LoginDetails = () => {
  return (
    <>
      <UserBox>
        <UserD>
          <div>
            <img src="src/images/dashboard.png" alt="" />
          </div>
          <div>
            <p>Udayan</p>
            <p>udayan1234@gmail.com</p>
          </div>
        </UserD>
        {userLinks.map((user) => (
          <NavLink className="user_link" key={user.name}>
            <UserMenu>
              <div>{user.icon}</div>
              <div>{user.name}</div>
            </UserMenu>
          </NavLink>
        ))}
      </UserBox>
    </>
  );
};

export default LoginDetails;
