import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

Login = React.createClass({
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

        Meteor.loginWithPassword(username, password, (error) => {
            if (error) {
                console.log(error.reason, 'warning');
            } else {
                
                FlowRouter.go("/");
            }
        });

        

    },

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <h4 className="page-header">Login</h4>
                    <form id="login" className="login" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                ref="username"
                                type="username"
                                name="username"
                                className="form-control"
                                placeholder="User Name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                ref="password"
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="Login"/>
                        </div>
                    </form>
                    <p>Don't have an account?
                        <a href="/signup">Sign Up</a>.</p>
                </div>
            </div>
        )
    }
});