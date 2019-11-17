import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const update_Book = ({prop, value}) => {
  return {
    type: "update_Book",
    payload: {prop, value}
  };
};

export const add_Book = ({name, author}) => {

  return ()=>{
    firebase.database().ref('/users/Books')
    .push({name, author})
    .then(()=> {
      dispatch({type: 'add_Book'});
      Actions.Bookshelf()});
  };
};

export const bookFetch = () => {
  return(dispatch) => {
    firebase.database().ref('/users/Books')
      .on('value',snapshot => {
        dispatch({type: 'book_Fetch_Success',payload: snapshot.val()});
      });
  };
};
