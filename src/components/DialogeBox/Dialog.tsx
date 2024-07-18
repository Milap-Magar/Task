import React, { useState } from "react";
import "./Dialog.css";

const DialogBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dialog-container">
      <button onClick={toggleDialog} className="open-dialog-btn">
        Open Dialog
      </button>
      {isOpen && (
        <div className="dialog-box">
          <h2>This is a Dialog Box</h2>
          <p>Hello, this is your dialog content!</p>
          <button onClick={toggleDialog} className="close-dialog-btn">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DialogBox;
