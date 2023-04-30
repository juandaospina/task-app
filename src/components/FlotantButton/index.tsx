import { useContext } from "react";

import { todoContext } from "../../context/TodoContext";
import "./index.css";

export const FlotantButton = () => {
  const { setHandleModal } = useContext(todoContext);

  return (
    <button className="button" onClick={() => setHandleModal(true)}>
      <span>+</span>
    </button>
  );
};
