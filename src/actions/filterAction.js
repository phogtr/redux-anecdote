import { FILTER } from "./types";

export const filterAnec = (filter) => {
  return {
    type: FILTER,
    payload: filter,
  };
};
