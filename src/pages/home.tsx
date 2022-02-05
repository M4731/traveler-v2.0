import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import { auth } from '../config/firebase';
import IPageProps from '../interfaces/page';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <Container>
            <Card>
                <CardBody>
                    <p>
                        Welcome to this page that is protected by Firebase auth!<br />
                    </p>
                    <p>
                        User: {auth.currentUser?.displayName}<br />
                        Click <Link to="/logout">here</Link> to logout.
                    </p>
                </CardBody>
            </Card>
        </Container>
    );
}

export default HomePage;