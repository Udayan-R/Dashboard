/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import Tree from "./Tree";

const MainHead = styled.div`
  margin: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 1.4rem;
`;

const Child = styled.div``;
const TreeNode = ({ node }) => {
  const { children, label, icon } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <MainHead>
        <span style={{ cursor: "pointer" }} onClick={handleClick}>
          {label}
        </span>
        <span style={{ cursor: "pointer" }} onClick={handleClick}>
          {icon}
        </span>
      </MainHead>
      <Child style={{ paddingLeft: "1rem" }}>
        {showChildren && <Tree tree={children} />}
      </Child>
    </>
  );
};

export default TreeNode;
