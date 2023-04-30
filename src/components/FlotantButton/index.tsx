import { useContext } from "react";
// import { useInterface } from "../../hooks/useInterface";
import "./index.css";
import { todoContext } from "../../context/TodoContext";

export const FlotantButton = () => {
  // const { onOpenModal } = useInterface();
  const { setHandleModal } = useContext(todoContext);

  return (
    <button className="button" onClick={() => setHandleModal(true)}>
      <span>+</span>
    </button>
  );
};
