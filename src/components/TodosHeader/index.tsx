import { useContext } from "react";

import { FILTERS_BUTTONS } from "../../../constants";
import { todoContext } from "../../context/TodoContext";
import { FilterValue } from "../../types/todo";
import "./index.css";

export const TodosHeader = () => {
  const { 
    filterSelected, 
    onFilterChangeHandler, 
    activeCount, 
    completedCount 
  } = useContext(todoContext);

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "no-selected";
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChangeHandler(key as FilterValue);
              }}
            >
              {literal}
            </a>
            <span
              className={`${className} badge-count`}
              style={{ backgroundColor: isSelected ? "#2c55fb" : "#b7c0c9" }}
            >
              {key === "active"
                ? activeCount
                : key === "completed"
                ? completedCount
                : key === "all" && activeCount + completedCount}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
