const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "book_Fetch_Success":
      return action.payload;
    default:
      return state;
  }
};
