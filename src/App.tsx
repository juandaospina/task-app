import { TodosHeader, TodoList, FlotantButton, TodoModal } from "./components";
import "./App.css";

export const AppRoot = () => {
  return (
    <>
      <h3>Gestión de Tareas</h3>
      <TodosHeader />
      <TodoList />
      <FlotantButton />
      <TodoModal />
    </>
  );
};
