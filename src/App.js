import React from 'react';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import uuid from 'uuid'

  const App = () => {
    return (
      <div className="container">
        <TodoInput/>
        <TodoList/>
      </div>
    );
 }

export default App;
