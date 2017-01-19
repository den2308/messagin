import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import {Message} from '../../../both/collections/message/Message.js'

Profile = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        user = Meteor.user()
        if (user) {
            console.log(user.emails[0].address);
            return {currentUser: user}
        } else {
            return {currentUser: ''}
        }
    },
    handleSubmit(event) {
        event.preventDefault();
        const username = ReactDOM
            .findDOMNode(this.refs.username)
            .value
            .trim();
        const town = ReactDOM
            .findDOMNode(this.refs.town)
            .value
            .trim();
        const email = ReactDOM
            .findDOMNode(this.refs.email)
            .value
            .trim();
        Meteor
            .users
            .update(Meteor.userId(), {
                $set: {
                    "profile.town": town,
                }
            });
        FlowRouter.go("/");

    },
    render() {
        return (
            <div className="Profile">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Email</label>
                            <div className="col-md-10">
                                <input
                                    value={Meteor.user()
                                    ? Meteor
                                        .user()
                                        .emails[0]
                                        .address
                                    : ""}
                                    ref="email"
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Email"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Username</label>

                            <div className="col-md-10">
                                <input
                                    value={this.data.currentUser.username}
                                    ref="username"
                                    type="username"
                                    className="form-control"
                                    id="inputUsername"></input>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-2 control-label">Chose Town
                            </label>
                            <div className="col-md-10">
                                <select ref="town" id="s1" className="form-control">
                                    <option value="Kiev">Kiev</option>
                                    <option value="Lviv">Lviv</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-2">
                                <button type="submit" className="btn btn-raised btn-success">Done</button>
                                <button onClick={Meteor.logout} className="btn btn-raised btn-warning">
                                    <a href="/login">Logout</a>
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
});
