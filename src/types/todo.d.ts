import { TAGS, TAG_COLORS, TODO_FILTERS } from "../../constants";

export interface Todo {
  id: string;
  title: string;
  description: string;
  tag: TAGS;
  dateStart: string | null | Date;
  dateEnd: string | null | Date;
  completed?: boolean;
}

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
export type TAGS = keyof typeof TAG_COLORS;
