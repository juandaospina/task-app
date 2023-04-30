import { TodosHeader, TodoList, FlotantButton, TodoModal } from "./components";
import "./App.css";
// import { useInterface } from "./hooks/useInterface";

export const AppRoot = () => {
  // const { isOpen } = useInterface();
  return (
    <>
      <h3>Tareas</h3>
      <TodosHeader />
      <TodoList />
      <FlotantButton />
      <TodoModal />
    </>
  );
};
