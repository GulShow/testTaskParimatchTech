import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../redux/tasksSlice';
import Task from '../Task/Task';
import './TasksList.css'

const TasksList = () => {
  const tasks = useSelector(selectTasks);

  return (
       <div className="tasksList__container">
      <div className="tasksList__header">

        <p className="tasksList__p">ID</p>
        <p className="tasksList__p">TITLE</p>
        <p className="tasksList__p">DESCRIPTION</p>
        <p className="tasksList__p">STATUS</p> 
   
       
      </div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TasksList;
