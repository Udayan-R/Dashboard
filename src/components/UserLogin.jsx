import { AiOutlineDown } from "react-icons/ai";
import { styled } from "styled-components";
import LoginDetails from "../utils/LoginDetails";
import { useState } from "react";

const UserLog = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Username = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;

const UserDown = styled.p`
  font-size: 1.8rem;
`;

const UserLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <UserLog onClick={toggle}>
          <img src="src/images/dashboard.png" alt="" />
          <Username>Udayan</Username>
          <UserDown>
            <AiOutlineDown onClick={toggle} />
          </UserDown>
        </UserLog>
        {isOpen ? <LoginDetails /> : ""}
      </div>
    </>
  );
};

export default UserLogin;
