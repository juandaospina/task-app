export interface ContextProps {
  todos: Todo[];
  filterSelected: FilterValue;
  handleModal: boolean;
  setHandleModal: (change: boolean) => void;
  setFilterSelected: (filter: FilterValue) => void;
  onCompletedHandler: (id: string, completed: boolean) => void;
  onFilterChangeHandler: (filter: FilterValue) => void;
  onDeleteHandler: (id: string) => void;
  onAddTask: (task: Todo) => void;
  onTodosFilter: any;
  activeCount: number;
  completedCount: number;
}
