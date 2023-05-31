import React from "react";
import { styled } from "styled-components";

export default function Footer({ isTaskSelected }) {
  const style = isTaskSelected ? " show" : "hidden";

  return (
    <Wrapper>
      <button className="btn">Today</button>
      <button className={`btn ${style}`}>Delete</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6f6f6;
  margin-top: 0px;
  padding: 20px 40px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  position: relative;
  z-index: 1;

  .btn {
    font-size: 20px;
    border: none;
    background: #f6f6f6;
    color: #ff3131;
		cursor: pointer;
  }

  .show {
    display: block;
  }

  .hidden {
    display: none;
  }
`;
