import React, { useState } from "react";
import { styled } from "styled-components";
import Popup from "./Popup";

export const ButtonLeft = () => {
  return (
    <BtnNav>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 52 52"
        fill="#ff3131"
        stroke="#ff3131"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" />
      </svg>
    </BtnNav>
  );
};

export const ButtonRight = () => {
  return (
    <BtnNav>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 52 52"
        fill="#ff3131"
        stroke="#ff3131"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="Group 132" id="Group_132">
          <path d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z" />
        </g>
      </svg>
    </BtnNav>
  );
};

export const ButtonPlus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setTask("");
  };

  const handleSubmit = (event) => {
    togglePopup();
    event.preventDefault();
    console.log(`The task you entered was: ${task}`);
  };

  return (
    <Wrapper>
      <BtnPlus onClick={togglePopup}>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          fill="#ff3131"
          stroke="#ff3131"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="4"></line>
          <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="4"></line>
        </svg>
      </BtnPlus>
      {isOpen && (
        <Popup
          content={
            <>
              <h2>https://calendar.com</h2>
              <p>Enter event time:</p>
              <p>YYYY-MM-DD HH:mm:ss</p>
              <input
                id="taskfield"
                name="taskfield"
                className="input-field"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                autoFocus
              />
              <div className="buttons">
                <div className="border-right" onClick={togglePopup}>
                  <button className="cancel">Cancel</button>
                </div>
                <div>
                  <button className="submit" onClick={handleSubmit}>
                    OK
                  </button>
                </div>
              </div>
            </>
          }
        />
      )}
    </Wrapper>
  );
};

const BtnNav = styled.button`
  border: none;
  background: #f6f6f6;
  cursor: pointer;
  width: 20px;
  margin: auto;
`;
const BtnPlus = styled.div`
  background: white;
  border: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  .popup-box {
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .box {
    position: relative;
    width: 70%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    /* margin-top: 15%; */
    max-width: 600px;
    margin-top: calc(100vh - 65vh - 20px);
    background: #e6e6e7;
    border-radius: 20px;
    padding: 20px 0 0;
    border: 1px solid #999;
    text-align: center;
  }

  .box h2 {
    font-weight: 600;
    font-size: 26px;
    margin: 0;
  }

  .box p {
    padding: 0;
    margin: 0;
    font-size: 20px;
  }

  .buttons {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    position: relative;
    border-top: #6d6d81 1px solid;
    margin-top: 20px;
    padding-top: 0px;
  }

  .buttons button {
    border: none;
    background: #e6e6e7;
    color: #007aff;
    font-size: 26px;
  }

  .cancel {
    font-weight: 600;
    cursor: pointer;
  }

  .submit {
    font-weight: 500;
    cursor: pointer;
  }

  .border-right {
    border-right: #6d6d81 1px solid;
    padding: 20px;
  }

  .input-field {
    margin-top: 30px;
    font-size: 20px;
    caret-color: #007aff;
    font-weight: 600;
  }

  .close-icon {
    content: "x";
    cursor: pointer;
    position: fixed;
    right: calc(15% - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
`;
