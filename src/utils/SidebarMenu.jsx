/* eslint-disable no-unused-vars */
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";
import Tree from "../utils/treeview/Tree";

const treeData = [
  {
    key: "0",
    label: "FAVOURITES",
    icon: <AiOutlineDown />,
    children: [
      {
        key: "0",
        label: "Goriorio Project",
        img: "src/images/bird_2.jpg",
        children: [],
      },

      {
        key: "0",
        label: "Conch Project",
        img: "src/images/diamond.png",
        children: [],
      },

      {
        key: "0",
        label: "Biznet Design",
        img: "src/images/107.jpg",
        children: [],
      },
    ],
  },
  {
    key: "1",
    label: "ALL PROJECT",
    icon: <AiOutlineDown />,

    children: [
      {
        key: "1",
        label: "Dribble Shot",
        img: "src/images/logo.png",
        children: [],
      },
      {
        key: "1",
        label: "Virgin Project",
        img: "src/images/lotus.png",
        children: [],
      },
      {
        key: "1",
        label: "Native Project",
        img: "src/images/n company.avif",

        children: [
          {
            key: "1",
            label: "Website Design",
            children: [],
          },
          {
            key: "1",
            label: "Dashboard",
            children: [],
          },
          {
            key: "1",
            label: "Mobile Responsive",
            children: [],
          },
        ],
      },
      {
        key: "2",
        label: "Brave Wings Project",
        img: "src/images/9_1sasa11.jpg",
        children: [],
      },
      {
        key: "2",
        label: "Obelix Project",
        img: "src/images/flying-eagle-abstract.jpg.avif",
        children: [],
      },
      {
        key: "2",
        label: "VPN Project",
        img: "src/images/eagle-logo_23987-400.avif",
        children: [],
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
