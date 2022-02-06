import {ActionType} from '../action-types/index'
import {Dispatch} from 'redux'
import {Action} from '../actions/index'

export const addCountry = (country:string) => {
    return (dispatch : Dispatch<Action>) => 
        dispatch({
            type : ActionType.ADD,
            payload : country
    })
}

export const wishlistCountry = (country:string) => {
    return (dispatch : Dispatch<Action>) => 
        dispatch({
            type : ActionType.WISHLIST,
            payload : country
    })
}

export const emptyAddCountry = () => {
    return (dispatch : Dispatch<Action>) => 
        dispatch({
            type : ActionType.EMPTYADD
    })
}

export const emptyWishlistCountry = () => {
    return (dispatch : Dispatch<Action>) => 
        dispatch({
            type : ActionType.EMPTYWISHLIST
    })
}