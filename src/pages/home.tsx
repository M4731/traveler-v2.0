import firebase from 'firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Container, Input } from 'reactstrap';
import { auth } from '../config/firebase';
import IPageProps from '../interfaces/page';
import {addToDatabase, favoriteToDatabase} from '../components/DatabaseManagement'

const HomePage: React.FunctionComponent<IPageProps> = props => { 
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
                    <Button onClick={event => addToDatabase(countryValue)}> add </Button>
                    <Button onClick={event => favoriteToDatabase(countryValue)}> favorite </Button>
                </CardBody>
            </Card>
        </Container>
    );
}

export default HomePage;