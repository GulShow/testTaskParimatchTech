import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import { RootState } from '../../redux/store';
import "./Form.css";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const tasksCount = tasks.length;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title) {
      setIsTitleEmpty(true);
    } else if (!description) {
      setIsDescriptionEmpty(true);
    } else {
      dispatch(
        addTask({
          id: tasksCount + 1,
          title,
          description,
          checked: false,
        })
      );
      setTitle("");
      setDescription("");
    }
  };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setIsTitleEmpty(false);
  };

    const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
    setIsDescriptionEmpty(false);
  };

  return (
       <form className="addForm" onSubmit={handleSubmit}>
      <div className="addForm__container">
        <div className="addForm__wrapper">
          <label className="addForm__label">Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className={isTitleEmpty ? "addForm__error-input" : "addForm__input"}
          />
          {isTitleEmpty && (
            <span className="addForm__error-message">This field is empty</span>
          )}
        </div>

        <div className="addForm__wrapper">
          <label className="addForm__label">Description:</label>
          <input
            value={description}
            onChange={handleDescriptionChange}
            className={
              isDescriptionEmpty
                ? "addForm__error-input"
                : "addForm__input"
            }
          />
          {isDescriptionEmpty && (
            <span className="addForm__error-message">This field is empty</span>
          )}
        </div>
        <div className="addForm__button-wrapper">
        <button className="addForm__button" type="submit">
          Create
        </button>
        </div>

      </div>
    </form>
  );
}

export default Form;
