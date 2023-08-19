import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

const UcardData = [
  {
    id: "1",
    CardName: "Upcoming Task",
    cardItems: [
      {
        id: "1",
        tagTitle: "Research",
        CardTitle: "Research Featured Order",
        CardContent:
          "An Order Feature is needed for users when making purchases",
        CardDate: "16 May",
        CardCom: "3",
        img: "",
      },
      {
        id: "1",
        tagTitle: "Research",
        CardTitle: "Research Featured Order",
        CardContent:
          "An Order Feature is needed for users when making purchases",
        CardDate: "16 May",
        CardCom: "3",
        img: "",
      },
    ],
  },
  {
    id: "2",
    CardName: "Working in progress",
    cardItems: [
      {
        id: "2",
        tagTitle: "Research",
        CardTitle: "Research Featured Order",
        CardContent:
          "An Order Feature is needed for users when making purchases",
        CardDate: "16 May",
        CardCom: "3",
        img: "",
      },
    ],
  },
  {
    id: "3",
    CardName: "Review Task",
    cardItems: [
      {
        id: "3",
        tagTitle: "Research",
        CardTitle: "Research Featured Order",
        CardContent:
          "An Order Feature is needed for users when making purchases",
        CardDate: "16 May",
        CardCom: "3",
        img: "",
      },
    ],
  },
  {
    id: "4",
    CardName: "Completed Task",
    cardItems: [
      {
        id: "3",
        tagTitle: "Research",
        CardTitle: "Research Featured Order",
        CardContent:
          "An Order Feature is needed for users when making purchases",
        CardDate: "16 May",
        CardCom: "3",
        img: "",
      },
    ],
  },
];
const TaskSec = styled.div`
  height: 54rem;
  padding: 4rem 4rem;
  padding-bottom: 0;
  display: flex;
  gap: 4rem;
`;

const UpcomingDiv = styled.div`
  height: 50rem;
  width: 32rem;
  padding: 2rem;
  border: 1px solid #525151;
  border-radius: 1.4rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H4 = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
`;
const UpIcons = styled.div`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Ucard = styled.div`
  width: 26rem;
  margin: 1rem;
  padding: 1.4rem;
  padding-bottom: 1rem;
  position: relative;
  border: 1px solid #525151;
  border-radius: 1.4rem;
  margin-top: 2.4rem;
  background: #1b1d21;
`;
const TagBars = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const TagBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.2rem;
`;

const Tag1 = styled.span`
  background: #b4d6ff;
  padding: 0.2rem 0.8rem;
  border-radius: 0.4rem;
`;
const Tag2 = styled.span`
  background: #e9ff93;
  padding: 0.2rem 0.8rem;
  border-radius: 0.4rem;
`;

const UcardContents = styled.div`
  margin-bottom: 2rem;
`;

const P = styled.div`
  font-size: 1.3rem;
  margin-top: 1.4rem;
  color: #737070;
  line-height: 1.5;
`;

const Date = styled.div`
  width: 15rem;
  display: flex;
  gap: 0.6rem;
  padding: 0.2rem 0.8rem;
  border: 1px solid #525151;
  border-radius: 0.6rem;
`;

const DateContent = styled.div`
  color: #737070;
  font-size: 1.4rem;
`;
const DateSpan = styled.span`
  color: #fff;
  font-size: 1.4rem;
`;
const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`;

const ImgComments = styled.img`
  width: 3rem;
  margin-left: -1rem;
  border-radius: 100%;
  border: 2px solid #1b1d21;
`;

const Border = styled.div`
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  background: #525151;
  bottom: 6rem;
  left: 0;
`;

const Commentbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #737070;
  font-size: 1.6rem;
`;
const Task = () => {
  return (
    <TaskSec>
      {UcardData.map((data) => (
        <>
          <UpcomingDiv>
            <Head>
              <H4>{data.CardName}</H4>
              <UpIcons>
                <MdAdd />
                <BsThreeDots />
              </UpIcons>
            </Head>
            <div>
              {data.cardItems.map((item) => (
                <>
                  <Ucard>
                    <TagBars>
                      <TagBar>
                        <Tag1>UI Design</Tag1>
                        <Tag2>{item.tagTitle}</Tag2>
                      </TagBar>
                      <div>
                        <BsThreeDots
                          style={{ color: "#737070", fontSize: "2rem" }}
                        />
                      </div>
                    </TagBars>
                    <UcardContents>
                      <div>
                        <H4>{item.CardTitle}</H4>
                        <P>{item.CardContent}</P>
                        <img src="" alt="" />
                      </div>
                      <Date>
                        <li style={{ listStyle: "none" }}>
                          <AiOutlineCalendar
                            style={{ color: "#737070", fontSize: "2rem" }}
                          />
                        </li>
                        <DateContent>Due to : </DateContent>
                        <DateSpan>{item.CardDate}</DateSpan>
                      </Date>
                      <Border></Border>
                    </UcardContents>
                    <Comment>
                      <div>
                        <ImgComments src="src/images/dashboard.png" alt="" />
                        <ImgComments src="src/images/dashboard.png" alt="" />
                        <ImgComments src="src/images/dashboard.png" alt="" />
                      </div>
                      <Commentbar>
                        <FiMessageSquare />
                        <span>{item.CardCom}</span>
                      </Commentbar>
                    </Comment>
                  </Ucard>
                </>
              ))}
            </div>
          </UpcomingDiv>
        </>
      ))}
    </TaskSec>
  );
};

export default Task;
