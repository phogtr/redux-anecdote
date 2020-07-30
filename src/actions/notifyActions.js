import { DISPLAY } from "./types";

export const displayNotify = (content, dur) => {
  return (dispatch) => {
    dispatch({
      type: DISPLAY,
      payload: content,
    });
    setTimeout(() => {
      dispatch({
        type: DISPLAY,
        payload: null,
      });
    }, dur * 1000);
  };
};
