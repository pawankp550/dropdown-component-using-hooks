import React, { useState } from "react";
import "./dropdown.scss";

const Dropdown = () => {
  const [ddstate, setddState] = useState({
    selectedOption: "select",
    isOpen: false
  });

  const toggleOptions = () => {
    const { isOpen } = ddstate;

    if (!isOpen) {
      setddState({
        ...ddstate,
        isOpen: true
      });
    } else {
      setddState({
        ...ddstate,
        isOpen: false
      });
    }
  };

  const getSelectedOption = e => {
    e.persist();
    setddState({
      ...ddstate,
      isOpen: false,
      selectedOption: e.target.innerHTML
    });
  };

  return (
    <div className="dropdown">
      <div className="dropdown-selected" onClick={toggleOptions}>
        <span>{ddstate.selectedOption}</span>
      </div>
      <div
        className={
          ddstate.isOpen ? "dropdown-list dropdown-list-open" : "dropdown-list"
        }
      >
        <ul className="dropdown-list-options">
          <li onClick={getSelectedOption}>vv</li>
          <li onClick={getSelectedOption}>honda</li>
          <li onClick={getSelectedOption}>panigale</li>
          <li onClick={getSelectedOption}>cbr</li>
        </ul>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div className="dropdown-selected" onClick={toggleOptions}>
  //       <span>select</span>
  //     </div>
  //     <h1>The transition Property</h1>
  //     <div
  //       className={
  //         ddstate.isOpen
  //           ? "box dropdown-list dropdown-list-open"
  //           : "box dropdown-list"
  //       }
  //     />
  //     <p>
  //       <b>Note:</b> This example does not work in Internet Explorer 9 and
  //       earlier versions.
  //     </p>
  //   </>
  // );
};

export default Dropdown;
