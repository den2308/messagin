import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import {Message} from '../../../both/collections/message/Message.js'

MessageInsertField = React.createClass({
    handleSubmit(event) {
        event.preventDefault();
            if(Meteor.user()){
            const messageText = ReactDOM
                .findDOMNode(this.refs.messageText)
                .value
                .trim();
            user = Meteor.user();
            Message.insert({username:user.username, messageText: messageText, createdAt: new Date(),userID:Meteor.userId(),town:user.profile.town});
            FlowRouter.go("/");
            }else{
                alert("You must chose town in profile page!")
                FlowRouter.go("/profile");
            }
    },
    render() {
        return (
            <div className="messageInsertForm">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group label-floating">
                        <div className="input-group">
                            <label className="control-label">Enter your message</label>
                            <input type="text" className="form-control" ref="messageText"></input>
                            <p className="help-block">Meesage show only your town, user another town cant see your message</p>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-fab btn-fab-mini">
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
                <br/>
            </div>
        )
    }
});