import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Container, Input } from 'reactstrap';
import { auth } from '../config/firebase';
import IPageProps from '../interfaces/page';
// import {addToDatabase, favoriteToDatabase} from '../components/DatabaseManagement'
import {actionCreators, State} from '../state';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

const HomePage: React.FunctionComponent<IPageProps> = props => { 
    const dispatch = useDispatch();
    const {addCountry, wishlistCountry, emptyAddCountry, emptyWishlistCountry} = bindActionCreators(
      actionCreators, 
      dispatch
    );

    const [countryValue, setCountryValue] = useState<string>('');

    return (
        <Container>
            <Card>
                <CardBody>
                    <p>
                        Welcome to this page that is protected by Firebase auth!<br />
                    </p>
                    <p>
                        User: {auth.currentUser?.email?.split('@')[0]}<br />
                        Click <Link to="/logout">here</Link> to logout.
                    </p>

                    <Input 
                        type="text"
                        name="country"
                        id="country"
                        placeholder="country"
                        onChange={event => setCountryValue(event.target.value)}
                        value={countryValue}
                    />
                    <Button onClick={() => addCountry(countryValue)}> add </Button>
                    <Button onClick={() => wishlistCountry(countryValue)}> wishlist </Button>
                    <Button onClick={() => emptyAddCountry()}> empty visited </Button>
                    <Button onClick={() => emptyWishlistCountry()}> empty wishlist </Button>
                </CardBody>
            </Card>
        </Container>
    );
}

export default HomePage;