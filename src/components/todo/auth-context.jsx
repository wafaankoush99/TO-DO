import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import base64 from 'base-64';


export const AuthContext = React.createContext();

function Auth_Provider(props) {
    const [loggedIn, set_LoggedIn] = useState(false);
    const [user, setUser] = useState({})
    const [token, set_Token] = useState(null);

    const [show, set_Show] = useState(false);

    const signUp = async function (username, password, role) {
        let url = `https://api-js401.herokuapp.com/signup`
        let body = {
            username, password, role
        }
        let result = await fetch(url, {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)

        })

        let user = await result.json()
        console.log(`You registered successfully ${user.user.username} , ${user.user.acl.role} with a password of -> ${user.password} and token  -> ${user.token}`, user);

    }

    const signIn = async function (username, password) {

        const usePass = `${username}:${password}`
        const encoded = base64.encode(usePass);
        const result = await fetch(`https://api-js401.herokuapp.com/signin`,
            {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: { Authorization: `Basic ${encoded}` },
            })
        let data = await result.json();
        console.log(`You logged in successfully ${data.user.username} :) `, data);
        validatorToken(data.token)
    }

    const validatorToken = function (token) {
        try {
            let user = jwt.decode(token)
            if (user) {
                isLoggedIn(!!user, token, user)
            }
        } catch (error) {
            isLoggedIn(false, null, {})
        }

    }

    const isLoggedIn = function (loggedIn, token, user) {
        cookie.save('auth', token);
        set_LoggedIn(loggedIn)
        setUser(user)
        set_Token(token)
    }

    const signOut = function () {
        set_LoggedIn(false)
        setUser({})
        set_Token(null)
        cookie.remove('auth');
        console.log(`You logged out ! please visit us again soon ..`)
    }


    const handleClose = function (e) {
        set_Show(false)
    };


    const handleShow = function (e) {
        e.preventDefault()
        set_Show(true)
    };

    const state = {
        loggedIn,
        set_LoggedIn,
        user,
        setUser,
        signUp,
        signIn,
        signOut,
        token,
        set_Token,
        show,
        set_Show,
        handleClose,
        handleShow
    }

    return (
        <AuthContext.Provider
            value={state}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default Auth_Provider;
