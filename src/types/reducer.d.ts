export interface State {
  isOpen: boolean;
}

const ACTIONS = {
  openModal: "OPEN_MODAL",
} as const;

export type Action = { type: 'OPEN_MODAL', payload: boolean } | { type: 'CLOSE_MODAL', payload: boolean  } 
