import React from "react";
import { Todo } from "../../types/todo";

export interface Props {
  todos: Todo[];
}

export const TodosTable: React.FC<Props> = ({ todos }) => {
  return (
    <table className="table table-bordered rounded-2">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Título</th>
          <th scope="col">Descripción</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <th scope="row">{todo.id}</th>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            {/* <td
              className={
                todo.completed
                  ? "badge rounded-pill text-bg-success"
                  : "badge rounded-pill text-bg-secondary"
              }
            >
              {todo.completed ? "Completada" : "Pendiente"}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
