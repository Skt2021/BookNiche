const INITIAL_STATE = {
  name: '',
  author: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "add_book":
      return {...state,[action.payload.prop]: action.payload.value}
    default:
      return state;
  }
};
