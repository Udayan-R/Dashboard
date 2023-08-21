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
  height: 14rem;
  width: 100%;
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

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Span = styled.span`
  font-size: 1.2rem;
  color: #fff;
  background: #313337;
  padding: 0.8rem;
  border-radius: 50%;
  margin-left: -1rem;
  border: 2px solid #232529;
  margin-right: 3rem;
  position: relative;
  &::after {
    content: "";
    height: 100%;
    width: 1px;
    background: #525151;
    position: absolute;
    right: -1.8rem;
    top: 0;
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
`;

const MemberBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Btn = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  padding: 1rem 1.8rem;
  background: #4f5ff6;
  border-radius: 1rem;
  margin-right: 2rem;
`;

const ImgSec = styled.img`
  width: 3.8rem;
  margin-left: -0.8rem;
  border: 2px solid #232529;
  border-radius: 100%;
`;
const Tabs = styled.div``;

const WorkMenu = ({ children }) => {
  const [activeTab, setActiveTab] = useState("1");
  const handleTabClick = (e) => {
    setActiveTab(e.target.id);
  };

  return (
    <>
      <div>
        <WorkLink>
          <Head>
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
            <Members>
              <ImgDiv>
                <ImgSec src="src/images/dashboard.png" alt="" />
                <ImgSec src="src/images/dashboard.png" alt="" />
                <ImgSec src="src/images/dashboard.png" alt="" />
                <Span>+5</Span>
              </ImgDiv>
              <MemberBtn>
                <Btn href="#">+ Add Member</Btn>
              </MemberBtn>
            </Members>
          </Head>

          <>
            <div>
              <Ul>
                {workMenu.map((tab, index) => (
                  <>
                    <Tabs>
                      <div>
                        <button
                          className={
                            activeTab === `${tab.id}` ? " box_active" : "box"
                          }
                          id={tab.id}
                          disabled={activeTab === `${tab.id}`}
                          onClick={handleTabClick}
                          key={index}
                        >
                          {tab.name}
                        </button>
                      </div>
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
