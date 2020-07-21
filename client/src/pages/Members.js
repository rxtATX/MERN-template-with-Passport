import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../utils/API';

function Members({ history }) {
    useEffect(() => {
        getMe()
    }, [])

    function getMe() {
        API.me()
            .then(({ data }) => {
                if (!data.id) {
                    history.push("/login")
                }
            })
            .catch(err => {
                history.push("/login")
            })
    }

    function logout() {
        API.logout()
            .then(() => {
                getMe()
            })
    }

    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span style={{ cursor: "pointer" }} className="navbar-brand" onClick={logout}>
                            Logout
                        </span>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Welcome <span className="member-name"></span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Members);