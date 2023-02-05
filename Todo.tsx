import * as React from 'react';
import './style.css';

export default function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.complete}></input>
      {todo.name}
    </div>
  );
}
