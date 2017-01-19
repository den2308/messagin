import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

Signup = React.createClass({
    handleSubmit(event) {
        event.preventDefault();
        const username = ReactDOM
            .findDOMNode(this.refs.username)
            .value
            .trim();
        const password = ReactDOM
            .findDOMNode(this.refs.password)
            .value
            .trim();
        const email = ReactDOM
            .findDOMNode(this.refs.email)
            .value
            .trim();
        var user = {
            email: email,
            username: username,
            password: password
        };

        Accounts.createUser(user);

        FlowRouter.go("/profile");
    },
    render() {
        return (
            <div className="sigup">

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h4 className="page-header">Sign Up</h4>
                    <form id="signup" className="signup" onSubmit={this.handleSubmit}>
                        <div className="form-group">

                            <input
                                ref="email"
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Email"></input>

                        </div>
                        <div className="form-group">

                            <input
                                ref="username"
                                type="username"
                                name="username"
                                className="form-control"
                                placeholder="User Name"></input>
                        </div>
                        <div className="form-group">

                            <input
                                ref="password"
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"></input>
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btn btn-raised btn-success" value="Sign Up"/>
                        </div>
                    </form>
                    <p>Already have an account?
                        <a href="/login">Log In</a>.</p>
                </div>

            </div>
        )
    }
});