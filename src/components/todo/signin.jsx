import React, { useContext } from "react";
import { AuthContext } from "./auth-context";
import { Button, Form, Col } from 'react-bootstrap';
import If from './if.jsx';


function SignIn() {
    const context = useContext(AuthContext);
    const submitHandler = e => {
        e.preventDefault();
        context.signIn(e.target.username.value, e.target.password.value)
    }


    const logOutHandler = e => {
        context.signOut()
    }


    return (
        <>
            <If condition={!context.loggedIn}>
                    <Form onSubmit={submitHandler}
                        style={{ 'float': 'right' }}>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    name="username"
                                    placeholder="Username"
                                    type="text" />
                            </Col>
                            <Col>
                                <Form.Control
                                    name="password"
                                    placeholder="Password"
                                    type="password" />
                            </Col>
                            <Button
                                variant="dark"
                                type="submit">
                                Sign In
                            </Button>
                        </Form.Row>
                    </Form>
            </If>
            <If condition={context.loggedIn}>
                <Button
                    variant="danger"
                    style={{ 'margin-left': '400px' }}
                    onClick={logOutHandler}>
                    Log Out
                </Button>
            </If>

        </>
    )


}
export default SignIn