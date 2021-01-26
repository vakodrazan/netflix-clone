import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { Form } from '../components'
import FooterContainer from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from '../context/firebase';

export default function Signin() {
    const [ error, setError ] = useState("");
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [ emailAddress, setEmailAddress ] = useState("");
    const [ password, setPassword ] = useState("");

    const isInValid = password === "" || emailAddress === "";

    const handleSignin = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('');
                setPassword('');
                setError('');
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => setError(error.message));
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            type="password"
                            placeholder="Password"
                            value={password}
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={ isInValid } type="submit" >
                            Sign in
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix?&nbsp;
                            <Form.Link to="/signup">Sign up now</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
