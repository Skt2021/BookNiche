export const addBook = ({prop, value}) => {
  return {
    type: "add_book",
    payload: {prop, value}
  };
};
