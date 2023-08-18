/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import styled from "styled-components";

const NotiBell = styled.div`
  position: relative;
  margin-right: 2rem;
`;

const Icon = styled.div`
  font-size: 2rem;
  background: #1b1d21;
  text-align: center;
  border-radius: 50%;
  padding: 0.8rem 1.4rem;
  position: relative;
`;

const Badge = styled.span`
  font-size: 1.2rem;
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0.4rem 0.8rem;
  border-radius: 50%;
  background: red;
  color: white;
`;

const Notification = () => {
  const [count, setCount] = useState("2");

  return (
    <>
      <NotiBell>
        <Icon>
          <IoIosNotificationsOutline />
        </Icon>
        <Badge>{count}</Badge>
      </NotiBell>
    </>
  );
};

export default Notification;
