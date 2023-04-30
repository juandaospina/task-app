import { ReactNode, createContext, useState } from "react";

import { toast } from "sonner";

import { FilterValue, Todo } from "../types/todo";
import { ContextProps } from "../types/context";
import { TODO_FILTERS } from "../../constants";

const mock: Todo[] = [
  {
    id: "1",
    title: "Lavar ropa",
    description: "Lavar la ropa que esta en el cesto",
    tag: "Aseo",
    dateStart: "Sat Apr 30 2023 00:00:00 GMT-0500",
    dateEnd: "Sat Apr 30 2023 02:00:00 GMT-0500",
    completed: false,
  },
  {
    id: "2",
    title: "Enviar documentos",
    description: "Enviar los documentos de seguridad social",
    tag: "Documentos",
    dateStart: "Sat Apr 30 2023 00:00:00 GMT-0500",
    dateEnd: "Sat Apr 30 2023 02:00:00 GMT-0500",
    completed: false,
  },
  {
    id: "3",
    title: "Meditar",
    description: "Meditar",
    tag: "Leer",
    dateStart: "Sat Apr 30 2023 00:00:00 GMT-0500",
    dateEnd: "Sat Apr 30 2023 02:00:00 GMT-0500",
    completed: false,
  },
  {
    id: "4",
    title: "Ir a gimnasio",
    description: "Realizar rutina de deporte en gimnasio",
    tag: "Ejercicio",
    dateStart: "Sat Apr 30 2023 00:00:00 GMT-0500",
    dateEnd: "Sat Apr 30 2023 02:00:00 GMT-0500",
    completed: true,
  },
];

type Props = {
  children: ReactNode
}

const defaultState = {
  todos: [...mock],
  filterSelected: TODO_FILTERS.ALL,
  handleModal: false,
  setHandleModal: () => {},
  setFilterSelected: () => {},
  onCompletedHandler: () => {},
  onFilterChangeHandler: () => {},
  onDeleteHandler: () => {},
  onTodosFilter: () => {},
  onAddTask: () => {},
  activeCount: 0,
  completedCount: 0,
};

export const todoContext = createContext<ContextProps>(defaultState);

export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>(mock);
  const [handleModal, setHandleModal] = useState(false);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const onCompletedHandler = (id: string | null, completed: boolean): void => {
    const todosListNew = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : { ...todo }
    );
    if (completed) {
      toast.success("Tarea completada con éxito");
    }
    setTodos(todosListNew);
  };

  const onDeleteHandler = (id: string): void => {
    const todosListNew = todos.filter((todo) => todo.id !== id);
    setTodos(todosListNew);
  };

  const onFilterChangeHandler = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const onTodosFilter = todos.filter((todo) => {
    if (filterSelected === "active") return todo.completed === false;
    if (filterSelected === "completed") return todo.completed === true;
    return todo;
  });

  const onAddTask = (task: Todo) => {
    const newTask = {
      ...task,
      id: window.crypto.randomUUID(),
      completed: false,
    };
    setTodos([...todos, newTask]);
  };

  const activeCount = todos.filter((todo) => todo.completed === false).length;
  const completedCount = todos.length - activeCount;

  return (
    <todoContext.Provider
      value={{
        todos,
        filterSelected,
        handleModal,
        setHandleModal,
        setFilterSelected,
        onCompletedHandler,
        onFilterChangeHandler,
        onDeleteHandler,
        onAddTask,
        onTodosFilter,
        activeCount,
        completedCount,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
