import { INIT, VOTE, CREATE, RESET, REMOVE } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case INIT:
      return action.payload;

    case VOTE:
      return state
        .map((a) => (a.id === action.payload.id ? action.payload : a))
        .sort((a, b) => b.votes - a.votes);

    case RESET:
      return state
        .map((a) => (a.id === action.payload.id ? action.payload : a))
        .sort((a, b) => b.votes - a.votes);

    case CREATE:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((a) => a.id !== action.payload);

    default:
      return state;
  }
}
