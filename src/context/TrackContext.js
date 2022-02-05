import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fecthTracks = (dispatch) => () => {};
const createTracks = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fecthTracks, createTracks },
  []
);
