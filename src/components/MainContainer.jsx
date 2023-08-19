import { styled } from "styled-components";
import Login from "./Login";
import WorkMenu from "./WorkMenu";

const MainDiv = styled.div`
  width: 100%;
  background: #232529;
`;

const MainContainer = () => {
  return (
    <>
      <MainDiv>
        <Login />
        <WorkMenu />
      </MainDiv>
    </>
  );
};

export default MainContainer;
