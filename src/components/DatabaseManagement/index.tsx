import { auth } from '../../config/firebase';
import firebase from 'firebase';

export const addToDatabase = (country : string) => {
    const database = firebase.database()

    var userID = ''
    if(auth.currentUser?.uid){
        userID = auth.currentUser?.uid;
    }

    database.ref().child("visited")?.child(userID).child('countries').get().then((snapshot) => {
        if (snapshot.exists()) {
            database.ref('/visited/'+auth.currentUser?.uid).set({
                countries : snapshot.val() + ',' + country
            }); 
        } 
        else {
            database.ref('/visited/'+auth.currentUser?.uid).set({
                countries : country
            })
            .catch((error) => {
                 console.error(error);
            });
        }

    })
    
}

export const favoriteToDatabase = (country : string) => {
    const database = firebase.database()

    var userID = ''
    if(auth.currentUser?.uid){
        userID = auth.currentUser?.uid;
    }

    database.ref().child("favorite")?.child(userID).child('countries').get().then((snapshot) => {
        if (snapshot.exists()) {
            database.ref('/favorite/'+auth.currentUser?.uid).set({
                countries : snapshot.val() + ',' + country
            }); 
        } 
        else {
            database.ref('/favorite/'+auth.currentUser?.uid).set({
                countries : country
            })
            .catch((error) => {
                 console.error(error);
            });
        }

    })
    
}