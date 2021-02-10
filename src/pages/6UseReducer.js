import React, { useReducer, useState } from "react";
//  For large complex states use immer
//    https://github.com/immerjs/use-immer
//    import { useImmerReducer } from "use-immer";

const INC = "increment";
const DEC = "decrement";

// always returns a new state, not the same state modified
//      e.g. do not return state++
const tallyReducer = (state, action) => {
  switch (action.type) {
    case INC:
      return state + 1;
    case DEC:
      return state - 1;
    default:
      return state;
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((todo, idx) => {
          if (idx === action.idx) {
            todo = { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
        todoCount: state.todoCount - 1,
      };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [count, dispatchCount] = useReducer(tallyReducer, 0);

  const [{ todos, todoCount }, dispatchTodos] = useReducer(todoReducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState("");

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatchCount({ type: INC })}>increment</button>
      <button onClick={() => dispatchCount({ type: DEC })}>decrement</button>
      <hr />
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatchTodos({ type: "add-todo", text });
            setText("");
          }}
        >
          <input
            type="text"
            placeholder="e.g. eggs"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
        {todos.map((todo, idx) => (
          <div
            role="button"
            key={idx}
            style={{
              cursor: "pointer",
              userSelect: "none",
              textDecoration: todo.completed ? "line-through" : "",
            }}
            onClick={() => dispatchTodos({ type: "toggle-todo", idx })}
          >
            {todo.text}
          </div>
        ))}
        {todoCount}
      </div>
    </div>
  );
};

export default UseReducerExample;
