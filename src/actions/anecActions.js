import { INIT, VOTE, CREATE, RESET, REMOVE } from "./types";
import db from "../services/anecdotes";

export const initAnec = () => {
  return async (dispatch) => {
    const anecs = await db.getData();
    dispatch({
      type: INIT,
      payload: anecs,
    });
  };
};

export const voteAnec = (anec) => {
  return async (dispatch) => {
    const newVote = await db.updateVote(anec);
    dispatch({
      type: VOTE,
      payload: newVote,
    });
  };
};

export const createAnec = (content) => {
  return async (dispatch) => {
    const newObj = await db.newAnec(content);
    dispatch({
      type: CREATE,
      payload: newObj,
    });
  };
};

export const removeAnec = (obj) => {
  return async (dispatch) => {
    const deleteObj = await db.deleteAnec(obj);
    dispatch({
      type: REMOVE,
      payload: deleteObj,
    });
  };
};

export const resetVote = (anec) => {
  return async (dispatch) => {
    const resetVote = await db.resetVote(anec);
    dispatch({
      type: RESET,
      payload: resetVote,
    });
  };
};
