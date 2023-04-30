import { useContext } from "react";

import { todoContext } from "../../context/TodoContext";
import { TodoCard } from "../TodoCard";
import { Todo } from "../../types/todo";
import "./index.css";

export const TodoList = () => {
  const {
    onTodosFilter: todos,
    onCompletedHandler,
    onDeleteHandler,
  } = useContext(todoContext);
  return (
    <section className="container-todos">
      {todos.map((todo: Todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onTodoComplete={onCompletedHandler}
          onDeleteHandler={onDeleteHandler}
        />
      ))}
    </section>
  );
};
