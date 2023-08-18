/* eslint-disable no-unused-vars */
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";
import Tree from "../utils/treeview/Tree";

export const treeData = [
  {
    key: "0",
    label: "FAVOURITES",
    icon: <AiOutlineDown />,
    children: [
      {
        key: "0-0",
        label: "Goriorio Project",
        img: "src/images/bird_2.jpg",
      },

      {
        key: "0-1",
        label: "Conch Project",
        img: "src/images/diamond.png",
      },

      {
        key: "0-2",
        label: "Biznet Design",
        img: "src/images/107.jpg",
      },
    ],
  },
  {
    key: "1",
    label: "ALL PROJECT",
    icon: <AiOutlineDown />,

    children: [
      {
        key: "1-1",
        label: "Dribble Shot",
        img: "src/images/logo.png",
      },
      {
        key: "1-2",
        label: "Virgin Project",
        img: "src/images/lotus.png",
      },
      {
        key: "1-3",
        label: "Native Project",
        img: "src/images/n company.avif",

        children: [
          {
            key: "1-3-1",
            label: "Website Design",
          },
          {
            key: "1-3-2",
            label: "Dashboard",
          },
          {
            key: "1-3-3",
            label: "Mobile Responsive",
          },
        ],
      },
      {
        key: "1-4",
        label: "Brave Wings Project",
        img: "src/images/9_1sasa11.jpg",
      },
      {
        key: "1-5",
        label: "Obelix Project",
        img: "src/images/flying-eagle-abstract.jpg.avif",
      },
      {
        key: "1-6",
        label: "VPN Project",
        img: "src/images/eagle-logo_23987-400.avif",
      },
    ],
  },
];

const SideMenuTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideTitle = styled.ul`
  display: flex;
  justify-content: space-around;
  color: #fff;
  font-size: 1.4rem;
  margin: 2rem 0;
  cursor: pointer;
`;

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main className="sidebar_main">
        <div className="search_cont">
          <div className="search">
            <div className="search_icon">
              <FiSearch />
            </div>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div>
          <Tree tree={treeData} />
        </div>
      </main>
    </>
  );
};

export default SidebarMenu;
