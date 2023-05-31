import React, { useState } from "react";
import { styled } from "styled-components";
import Footer from "./Footer";

export default function Calendar({ taskData }) {
  const [isTaskSelected, setTaskSelected] = useState(false);

  const handleClick = () => {
    if (isTaskSelected) {
      clearAllSelected();
    }
    setTaskSelected(!isTaskSelected);
  };

  function clearAllSelected() {
    taskData.map((item) =>
      item.map((el, idx) => {
        return (el.selected = false);
      })
    );
  }

  function padZero(x) {
    return x < 10 ? "0" + x + ":00" : x + ":00";
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="grid-8">
          {taskData.map((item) =>
            item.map((el, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    cursor: el.timeStamp || !el.task ? "default" : "pointer",
                    backgroundColor: el.task ? "#ebecff" : "",
                    padding: "2px",
                    paddingRight: el.timeStamp ? "0" : "2px",
                    borderBottom: el.timeStamp ? "none" : "1px solid lightgray",
                    borderRight:
                      el.timeStamp || idx === 7
                        ? "none"
                        : "1px solid lightgray",
                  }}
                >
                  <div
                    className={`task ${
                      el.selected && isTaskSelected ? "selected" : ""
                    }`}
                    onClick={() => {
                      if (el.task) {
                        el.selected = !isTaskSelected;
                        handleClick();
                      }
                    }}
                  >
                    <span
                      className={`time-stamp ${
                        el.timeStamp ? "pr-0" : "pr-10"
                      }`}
                    >
                      {el.timeStamp ? padZero(el.time) : ""}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer isTaskSelected={isTaskSelected} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    height: 555px;
    top: -15px;
    z-index: 0;
    position: relative;
  }
  .grid-8 {
    display: grid;
    grid-template-columns: repeat(8, minmax(8px, 1fr));
    margin: 0;
  }
  .task {
    padding: 8px;
  }
  .selected {
    background-color: #b3b7ff;
  }
  .time-stamp {
    font-size: 18px;
    font-weight: 500;
    padding: 15px;
    top: 22px;
    position: relative;
    color: #c0c0c0;
  }
  .pr-0 {
    padding-right: 0;
  }
  .pr-10 {
    padding-right: 10px;
  }
`;
