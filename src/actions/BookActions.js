import firebase,{storage} from 'firebase';
import { Actions } from 'react-native-router-flux';
export const update_Book = ({prop, value}) => {
  return {
    type: "update_Book",
    payload: {prop, value}
  }; 
};

export const add_Book = ({name, author, description="null", imgLink,userEmail}) => {
  const {currentUser} = firebase.auth();
  return (dispatch)=>{
    firebase.database().ref(`/users/${currentUser.uid}/Books`)
    .push({name, author, description, imgLink, userEmail})
    .then(()=> {
      dispatch({type: 'add_Book'});
      Actions.pop()});
  };
};

export const bookFetch = () => {
  const {currentUser} = firebase.auth();
  return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/Books`)
      .on('value',snapshot => {
      /*  console.log(snapshot.val());*/
        dispatch({type: 'book_Fetch_Success',payload: snapshot.val()});
      });
  };
};
// export const bookFetchAll = () => {
//   const {currentUser} = firebase.auth();
//   return(dispatch) => {
//     firebase.database().ref(`/users//Books`)
//       .on('value',snapshot => {
//        console.log(snapshot.val());
//         dispatch({type: 'book_Fetch_Success',payload: snapshot.val()});
//       });
//   };
// };

export const add_BookList = ({name, author}) => {
  const {currentUser} = firebase.auth();
  return(dispatch) => {
    firebase.database().ref(`/users/Books/${currentUser.uid}`)
    .push({name, author})
    .then(()=> {
      dispatch({type: 'add_Book'});
    });
  };
};
