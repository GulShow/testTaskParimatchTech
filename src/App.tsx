import React, { useState } from 'react';
import Form from './components/Form/Form';
import TasksList from './components/TasksList/TasksList';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app__container">
        <Form />
        <TasksList />
      </div>
    </Provider>
  );
}

export default App;