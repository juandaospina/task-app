import { createPortal } from 'react-dom'

import { Toaster } from 'sonner';
// import { formatDistance } from 'date-fns'

import { dateConvert, getColor } from "../../utils";
import { Todo } from "../../types/todo";
import "./index.css";

interface Props {
  todo: Todo;
  onTodoComplete: (id: string, completed: boolean) => void;
  onDeleteHandler: (id: string) => void;
}

export const TodoCard: React.FC<Props> = ({ todo, onTodoComplete, onDeleteHandler }) => {
  const bgColor = getColor(todo.tag);
  const _dateStart = dateConvert(todo.dateStart as Date);
  const _dateEnd = dateConvert(todo.dateEnd as Date);
  // const distanceOfTime = formatDistance(todo.dateStart as Date, todo.dateEnd as Date)

  const onToggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onTodoComplete(todo.id ?? '', checked);
  };

  return (
    <div className="card">
      <div className='header-card'>
        <div
          className="badge-tag"
          style={{ backgroundColor: `rgba(${bgColor}, 0.2)` }}
        >
          <span style={{ color: `rgba(${bgColor})`, fontWeight: 600 }}>
            {todo.tag}
          </span>
        </div>
        <button onClick={() => onDeleteHandler(todo.id)}>
          -
        </button>
      </div>
      <div className="card-info">
        <div>
          <h3 style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.title}
          </h3>
          <p>{todo.description}</p>
        </div>
        <div>
          <input
            id="check"
            className="toggle"
            checked={todo.completed}
            type="checkbox"
            onChange={(event) => onToggleCheck(event)}
          />
        </div>
      </div>
      <hr />
      <div className="card-date">
        {/* <span>{distanceOfTime}</span> */}
        <span>{`${_dateStart} - ${_dateEnd}`}</span>
      </div>
      {createPortal(<Toaster richColors position='bottom-left'/>, document.body)}
    </div>
  );
};
