import {Action} from '../actions/index'
import {ActionType} from '../action-types/index'
import { auth } from '../../config/firebase';
import firebase from 'firebase';

const initialState = '';

const reducer = (state : string = initialState, action : Action) => {
    const database = firebase.database()

    var userID = ''
    if(auth.currentUser?.uid){
        userID = auth.currentUser?.uid;
    }
    //console.log(state)


    switch (action.type) {
        case ActionType.ADD:{
            //console.log(action.payload)
            state = action.payload;
            database.ref().child("visited")?.child(userID).child('countries').get().then((snapshot) => {
                if (snapshot.val() !== null) {
                    database.ref('/visited/'+auth.currentUser?.uid).set({
                        countries : snapshot.val() + ',' + state
                    }); 
                    return snapshot.val() + ',' + state
                } 
                else {
                    database.ref('/visited/'+auth.currentUser?.uid).set({
                        countries : state
                    })
                    .catch((error) => {
                         console.error(error);
                    });
                    return state
                }
            })
            return null;
        }
        case ActionType.WISHLIST:{
            state = action.payload;
            database.ref().child("wishlist")?.child(userID).child('countries').get().then((snapshot) => {
                if (snapshot.val() !== null) {
                    database.ref('/wishlist/'+auth.currentUser?.uid).set({
                        countries : snapshot.val() + ',' + state
                    }); 
                    return snapshot.val() + ',' + state
                } 
                else {
                    database.ref('/wishlist/'+auth.currentUser?.uid).set({
                        countries : state
                    })
                    .catch((error) => {
                         console.error(error);
                    });
                    return state
                }
        
            })
            return state;
        }
        case ActionType.EMPTYADD:{
            database.ref('/visited/'+auth.currentUser?.uid).set({countries : null}); 
            return null;
        }
        case ActionType.EMPTYWISHLIST:{
            database.ref('/wishlist/'+auth.currentUser?.uid).set({countries : null}); 
            return null;
        }
        default:
            return state;
    }
}

export default reducer;