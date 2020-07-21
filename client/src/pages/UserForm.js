import React, { useState, useEffect } from 'react';
import { withRouter, Route, Switch } from "react-router-dom";
import API from '../utils/API';
import Signup from './Signup';
import Login from './Login'

const initialDataObj = {
    email: '',
    password: ''
}

function UserForm({ history }) {
    const [form, setForm] = useState(initialDataObj);
    const [showErr, setShowErr] = useState(false);
    const [err, setErr] = useState(false);

    useEffect(() => {
        if (showErr) {
            setTimeout(() => {
                setShowErr(false)
            }, 2000)
        }
    }, [showErr])

    function submitForm(APICall) {
        if (!form.email || !form.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        completeFormProcess(APICall);
        setForm(initialDataObj)
    }

    function onChange({ target }) {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })

        if (showErr) {
            setShowErr(false)
        }
    }

    function completeFormProcess(APICall) {
        API[APICall](form)
            .then(() => {
                history.push("/");
                // If there's an error, log the error
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr({ message }) {
        setShowErr(message)
        setErr(message)
    }

    return (
        <Switch>
            <Route path={["/signup"]}>
                <Signup
                    err={err}
                    showErr={showErr}
                    onChange={onChange}
                    submitForm={submitForm}
                />
            </Route>
            <Route path={["/login"]}>
                <Login
                    err={err}
                    showErr={showErr}
                    onChange={onChange}
                    submitForm={submitForm}
                />
            </Route>
        </Switch>
    )
}

export default withRouter(UserForm);