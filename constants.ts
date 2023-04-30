export const TAG_COLORS = {
  Documentos: "93, 173, 226",
  Aseo: "236, 112, 99",
  Leer: "155, 89, 182",
  Ejercicio: "26, 188, 156",
  Estudiar: "46, 204, 113",
  Meditar: "241, 196, 15",
  Pagar: "52, 73, 94"
};

export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Activos",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Completados",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;

