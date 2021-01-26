import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from "../constants/routes";
import FooterContainer from '../containers/footer';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
    const  history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInValid = firstName === "" || emailAddress === "" || password === "";

    const handleSignup = event => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoUrl: Math.floor(Math.random() * 5) + 1, 
                })
                .then(() => {
                    setFirstName('');
                    setEmailAddress('');
                    setPassword('');
                    setError('');
                    history.push(ROUTES.BROWSE);
                })
            }).catch((error) => setError(error.message))
    }

    return (
        <>
            <HeaderContainer>
                <Form >
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input 
                            placeholder="FirstName"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
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
                            Sign up
                        </Form.Submit>
                        <Form.Text>
                            Already have an account.&nbsp;
                            <Form.Link to="/signin">Sign in</Form.Link>
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
