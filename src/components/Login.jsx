import { styled } from "styled-components";
import { BsMoon } from "react-icons/bs";
import Button from "../ui/darkmodebtn/Button";
import Notification from "../ui/notification/Notification";
import UserLogin from "./UserLogin";

const LoginBar = styled.h6`
  width: 135rem;
  display: flex;
  padding: 2rem;
  color: #fff;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.6px solid #525151;
`;

const Title = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
`;

const Darkmode = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

const Dark = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;

const DarkNot = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Login = () => {
  return (
    <>
      <LoginBar>
        <Title>Workspace</Title>
        <DarkNot>
          <Darkmode>
            <div className="dark_icon">
              <BsMoon />
            </div>
            <Dark>Dark Mode</Dark>
            <Button />
          </Darkmode>
          <Notification />
          <UserLogin />
        </DarkNot>
      </LoginBar>
    </>
  );
};

export default Login;
