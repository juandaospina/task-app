import { useReducer } from "react";
import { Action, State } from "../types/reducer";

const initialState: State = {
  isOpen: false,
};

function reducer(state: State, action: Action): State {
  if (action.type === "OPEN_MODAL") {
    console.log("[OPEN_MODAL]", action.payload)
    return {
      ...state,
      isOpen: action.payload,
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isOpen: action.payload,
    };
  }

  return state;
}

export function useInterface() {
  const [{ isOpen }, dispatch] = useReducer(reducer, initialState);

  function onOpenModal(payload: boolean) {
    dispatch({ type: "OPEN_MODAL", payload });
  }

  function onCloseModal(payload: boolean) {
    dispatch({ type: "CLOSE_MODAL", payload });
  }

  return {
    // Properties
    isOpen,
    // Methods
    onOpenModal,
    onCloseModal,
  };
}
