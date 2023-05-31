import React from "react";
import { ButtonLeft, ButtonPlus, ButtonRight } from "./Buttons";
import { styled } from "styled-components";

export default function Header({ currentWeek, currentDate }) {
  const currentMonth = currentDate.toLocaleString("en-US", { month: "long" });
  const currentYear = currentDate.getFullYear();

  return (
    <Wrapper>
      <div className="title">
        <h1>Interview Calendar</h1>
				<ButtonPlus />
      </div>
      <div className="calendar-header">
        <div className="grid-7">
          {currentWeek.map((item, index) => (
            <h5 className="day" key={index}>
              {item.dayName[0]}
            </h5>
          ))}
        </div>
        <div className="grid-7">
          {currentWeek.map((item, index) => (
            <h5
              className={`date ${item.currentDate ? "date-current" : ""}`}
              key={index}
            >
              {item.date}
            </h5>
          ))}
        </div>
        <div className="month-nav">
          <ButtonLeft />
          <h5>
            {currentMonth} {currentYear}
          </h5>
          <ButtonRight />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px 20px 40px;
  }
  .title h1 {
    font-weight: 400;
  }
  .calendar-header {
    box-sizing: border-box;
    background-color: #f6f6f6;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    position: relative;
    padding: 10px 0 10px 12.5%;
    z-index: 1;
  }
  .day {
    margin: 10px auto;
    font-size: 14px;
    font-weight: 500;
  }
  .month-nav {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
  }
  .month-nav h5 {
    margin: auto;
    font-size: 22px;
    font-weight: 400;
  }
  .grid-7 {
    display: grid;
    grid-template-columns: repeat(7, minmax(8px, 1fr));
  }
  .date {
    width: 26px;
    height: 26px;
    margin: auto;
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    color: black;
    padding: 0px;
    border-radius: 0px;
  }
  .date-current {
    color: white;
    background-color: #ff3131;
    padding: 8px;
    border-radius: 50%;
  }
`;
