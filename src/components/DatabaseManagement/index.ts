import firebase from 'firebase';
import {auth} from '../../config/firebase';


export const getAllVisited = async() => {
    const database = firebase.database()

    var userID = ''
    if(auth.currentUser?.uid){
        userID = auth.currentUser?.uid;
    }
    
    return await database.ref().child("visited").child(userID).child("countries").get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return(snapshot.val().toString());
        } else {
            return("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
}


export const getAllWishlisted = async() => {
    const database = firebase.database()

    var userID = ''
    if(auth.currentUser?.uid){
        userID = auth.currentUser?.uid;
    }

    return await database.ref().child("wishlist").child(userID).child("countries").get().then((snapshot) => {
        if (snapshot.exists()) {
          return(snapshot.val());
        } else {
          return("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });


}