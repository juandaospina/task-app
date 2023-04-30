import { TAG_COLORS } from "../../constants";
import { TAGS } from "../types/todo";

export const getColor = (item: TAGS) => TAG_COLORS[item];

export const dateConvert = (date: Date) => {
  const _date = new Date(date);
  const month = _date.toLocaleString("default", { month: "short" }).charAt(0).toUpperCase();
  const day = _date.getDate();
  const year = _date.getFullYear();

  return `${month + _date.toLocaleString("default", { month: "short" }).substring(1)} ${day} ${year}`;
};
