import React, { MouseEventHandler } from "react";
import { ModalWindowProps } from "../../utils/types";
import "./ModalWindow.css";

export const ModalWindow = ({
  title,
  description,
  onClose,
  isOpen,
  checked
}: ModalWindowProps) => {
  const stopProp: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };
  const disabled = true;
 
  return (
    <div className={isOpen ? "modalWindow active" : "modalWindow"} onClick={onClose}>
      <div
        className={
          isOpen ? "modalWindow__content active" : "modalWindow__content"
        }
        onClick={stopProp}
      >
        <div className="modalWindow__info">
          <h2 className="modalWindow__heading">{title}</h2>
         
            <h3 className="modalWindow__description-h3">Description:</h3>
            <p className="modalWindow__p">{description}</p>
            <div className="modalWindow__status-wrapper">
            <p className="modalWindow__p">Status:</p>
              <input type="checkbox" checked={checked} onChange={() => {}} className={disabled ? 'disabled-checkbox' : ''} />
            </div>
          <button className="modalWindow__button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
