import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Signup({ onChange, showErr, err, submitForm }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="email-input"
                                    name="email"
                                    onChange={onChange}
                                    placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password-input"
                                    name="password"
                                    onChange={onChange}
                                    placeholder="Password" />
                            </div>
                            <div style={{
                                "opacity": showErr ? 1 : 0,
                                transition: !showErr ? "opacity" : "",
                                transitionDuration: !showErr ? "1s" : "",
                                transitionTimingFunction: !showErr ? "ease-in-out" : ""
                            }} id="alert" className="alert alert-danger" role="alert">
                                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span className="sr-only">Error:</span> <span className="msg">{err}</span>
                            </div>
                            <button type="button"
                                onClick={() => submitForm("signUp")}
                                className="btn btn-default">Sign Up</button>
                        </form>
                        <br />
                        <p>Or log in <Link to="/login">here</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Signup);