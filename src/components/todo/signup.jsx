import React, { useContext } from 'react';
import { AuthContext } from './auth-context';
import { Modal, Button, Form } from 'react-bootstrap';
import If from './if.jsx';


function Register() {
    const context = useContext(AuthContext);


    const submitHandler = e => {
        e.preventDefault();
        let userName = e.target.username.value;
        let password = e.target.password.value;
        let role = e.target.role.value || 'user';

        let user = {
            username: userName,
            password: password,
            role: role,
        }

        // console.log(user);
        context.signUp(user.username, user.password, user.role)
    }



    return (


        <>
            <If condition={!context.loggedIn}>

                <Modal
                    show={context.show}
                    onHide={context.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                           <p>Sign Up</p> 
                        </Modal.Title>
                    </Modal.Header>


                    <Form onSubmit={submitHandler}>

                        <Modal.Body>

                            <Form.Label>
                               <p>User Name</p> 
                                </Form.Label>

                            <Form.Control
                                type='text'
                                name='username'
                                placeholder="Choose unique username" />

                            <Form.Label>
                               <p>Email address</p> 
                                </Form.Label>

                            <Form.Control
                                type="email"
                                name='email'
                                placeholder="The Email Should have @ sympol" />

                            <Form.Label>
                               <p>Password</p> 
                                </Form.Label>

                            <Form.Control
                                type="password"
                                name='password'
                                placeholder="Your Password Should be Strong Password" />

                            <Form.Label>
                               <p>Role</p> 
                                </Form.Label>

                            <Form.Control as="select" name="role" >
                                <option value="user" >User</option>
                                <option value="editor" >Editor</option>
                                <option value="admin" >Admin</option>
                            </Form.Control >

                        </Modal.Body>

                        <Modal.Footer>

                            <Button
                                variant="primary"
                                type="submit"
                                onClick={context.handleClose}>
                               <p>Sign Up</p> 
                            </Button>

                        </Modal.Footer>
                    </Form>
                </Modal>


            </If>


        </>
    )
}

export default Register;