import firebase,{storage} from 'firebase';
import { Actions } from 'react-native-router-flux';
export const update_Book = ({prop, value}) => {
  return {
    type: "update_Book",
    payload: {prop, value}
  }; 
};

export const add_Book = ({name, author, description="null", imgLink}) => {
  const {currentUser} = firebase.auth();
  return (dispatch)=>{
    firebase.database().ref(`/users/${currentUser.uid}/Books`)
    .push({name, author, description, imgLink})
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
        console.log(snapshot.val());
        dispatch({type: 'book_Fetch_Success',payload: snapshot.val()});
      });
  };
};

/*export const bookFetch = () => {
  const {currentUser} = firebase.auth();
  var ref = firebase.database().ref(`/users/${currentUser.uid}/Books`).orderByKey();
  return (dispatch) =>{books
    ref.once('value')
      .then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var id = childSnapshot.key;
            snapshot.forEach(function(id){
                dispatch({type: 'book_Fetch_Success',payload: id.val()});
            });
          });
});
};
};*/
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
