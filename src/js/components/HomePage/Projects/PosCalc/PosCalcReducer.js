const defaultState = {

};

export default function PosReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
}