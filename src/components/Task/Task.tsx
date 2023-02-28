import React, { useState } from "react";
import { TaskProps } from "../../utils/types";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import './Task.css';

const Task = ({ id, title, description, checked}: TaskProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedCheckBox, setCheckedCheckBox] = useState(checked);

  const handleCheck = () => {
    setCheckedCheckBox(prev => !prev)
  }

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="task__container" onClick={handleOpenModal}>
      <div className="task__wrapper" onClick={handleOpenModal}>
        <p className="task__id">{id}</p>
        <p className="task__text">{title}</p>
        <p className="task__text">{description}</p>
        <input type="checkbox" checked={checkedCheckBox} onChange={handleCheck} />
      </div>
      {isOpen && (
        <ModalWindow
          title={title}
          description={description}
          onClose={handleCloseModal}
          isOpen={isOpen}
          checked={checkedCheckBox}
        ></ModalWindow>
      )}
    </div>
  );
};

export default Task;
