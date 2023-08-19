/* eslint-disable react/prop-types */
import { BsExclamationCircle } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { styled } from "styled-components";
import { useState } from "react";
import Overview from "../ui/tabs/Overview";
import Task from "../ui/tabs/Task";
import Timeline from "../ui/tabs/Timeline";
import Discussion from "../ui/tabs/Discussion";
import Files from "../ui/tabs/Files";

const workMenu = [
  {
    name: "Overview",
    id: 1,
    tabDiv: <Overview />,
  },
  {
    name: "Task",
    id: 2,
    tabDiv: <Task />,
  },
  {
    name: "Timeline",
    id: 3,
    tabDiv: <Timeline />,
  },
  {
    name: "Discussion",
    id: 4,
    tabDiv: <Discussion />,
  },
  {
    name: "Files",
    id: 5,
    tabDiv: <Files />,
  },
];

const WorkLink = styled.div`
  padding-bottom: 2.6rem;
`;

const HelpStar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 1rem;
  padding: 2rem 2rem;
`;

const H1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
`;

const Help = styled.div`
  font-size: 1.8rem;
  color: #737070;
`;
const Workimg = styled.div`
  width: 4rem;
`;

const Ul = styled.div`
  list-style: none;
  display: flex;
  gap: 4.8rem;
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.6px solid #525151;
`;

const Tabs = styled.div``;

const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  font-size: 2rem;
  color: #737070;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  &:hover::before {
    position: absolute;
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    background: #fff;
    left: 0;
    bottom: -2.2rem;
    transition: 0.3s ease-in-out;
  }
`;
const WorkMenu = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (e) => {
    setActiveTab(e.target.id);
  };

  return (
    <>
      <div>
        <WorkLink>
          <HelpStar>
            <Workimg>
              <img
                className="work_img"
                src="src/images/n company.avif"
                alt=""
              />
            </Workimg>
            <H1>Native Project</H1>
            <Help>
              <BsExclamationCircle />
            </Help>
            <Help>
              <AiOutlineStar />
            </Help>
          </HelpStar>

          <>
            <div>
              <Ul>
                {workMenu.map((tab, i) => (
                  <>
                    <Tabs>
                      <Button
                        id={tab.id}
                        disabled={activeTab === `${tab.id}`}
                        onClick={handleTabClick}
                        key={i}
                      >
                        {tab.name}
                      </Button>
                    </Tabs>
                  </>
                ))}
              </Ul>
            </div>
            <div>
              {workMenu.map((tab, i) => (
                <div key={i}>{activeTab === `${tab.id}` && tab.tabDiv}</div>
              ))}
            </div>
          </>
        </WorkLink>
        <div></div>
        <section>{children}</section>
      </div>
    </>
  );
};

export default WorkMenu;
