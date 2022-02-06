import Nav from '../layouts/Nav/index';
import IPageProps from '../interfaces/page'
import React, { useEffect, useState } from 'react';
import {auth} from '../config/firebase'
import { Card, CardBody, Container, Button } from 'reactstrap';
import { getAllVisited, getAllWishlisted } from '../components/DatabaseManagement/index'
import {actionCreators, State} from '../state';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

const ProfilePage: React.FunctionComponent<IPageProps> = props => {
    const dispatch = useDispatch();
    const {addCountry, wishlistCountry, emptyAddCountry, emptyWishlistCountry} = bindActionCreators(
      actionCreators, 
      dispatch
    );

    const currentUsr : string | null | undefined = auth.currentUser?.email?.split('@')[0];

    // const visitedCountries = getAllVisited();
    // const wishlistedCountries = getAllWishlisted();

    const [visitedCountries,setVisitedCountries] = useState("") 
    const [wishlistedCountries,setWishlistedCountries] = useState("")
    useEffect(() => {
        //setVisitedCountries(await getAllVisited());
        const func = async () => {
            setVisitedCountries(await getAllVisited());
            setWishlistedCountries(await getAllWishlisted());
        }
        func();
    },[])

    const refreshAndActionVisited = () => {
        emptyAddCountry();
        window.location.reload();
    }

    const refreshAndActionWishlist = () => {
        emptyWishlistCountry();
        window.location.reload();
    }


    return(
        <Container>
            <Nav/>

            <Card>
                <CardBody>

            <h3>Profile for user {currentUsr}</h3>

            <p>Visited countries : {visitedCountries}</p>
            <p>Wishlisted countries : {wishlistedCountries}</p>

            
            <Button onClick={() => refreshAndActionVisited()} style ={{ marginRight: '1rem' }}> empty visited </Button>
            <Button onClick={() => refreshAndActionWishlist()}> empty wishlist </Button>


                </CardBody>
            </Card>
            
        </Container>
    )
}

export default ProfilePage;