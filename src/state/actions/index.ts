import {ActionType} from '../action-types/index'

interface AddAction{
    type: ActionType.ADD;
    payload: string;
}

interface WishlistAction{
    type: ActionType.WISHLIST;
    payload: string;
}

interface EmptyAddAction{
    type: ActionType.EMPTYADD;
}

interface EmptyWishlistAction{
    type: ActionType.EMPTYWISHLIST;
}

export type Action = AddAction | WishlistAction | EmptyAddAction | EmptyWishlistAction