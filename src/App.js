import React from "react";
import { styled } from "styled-components";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import { setCurrentDate } from "./utils/setCurrentDate";
import { setCurrentWeek } from "./utils/setCurrentWeek";
import { setTaskData } from "./utils/setTaskData";

function App() {
  const weekData = setCurrentWeek();
  const currentDate = setCurrentDate();
  const taskData = setTaskData(weekData);

  return (
    <Wrapper>
      <Header currentWeek={weekData} currentDate={currentDate} />
      <Calendar taskData={taskData} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;
