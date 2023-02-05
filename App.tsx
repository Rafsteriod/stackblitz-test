import * as React from 'react';
import './style.css';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, name: 'bro', complete: false },
  ]);
  const todoNameRef = React.useRef();

  function handleBrudi(e) {
    const name = todoNameRef.current.value;
    if (name === '') {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  return (
    <div>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleBrudi}>brudi</button>
    </div>
  );
}
