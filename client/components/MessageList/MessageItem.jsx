import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Message} from '../../../both/collections/message/Message.js'

MessageItem = React.createClass({
    getContent() {
        if (this.props.message.userID == Meteor.userId()) {
            return (
                <div className="form-group">
                    <label className="col-md-2 control-label">{this.props.message.username}</label>

                    <div className="col-md-10">
                        <label className="control-label">{this.props.message.town}</label>
                        <div className="well">
                            {this.props.message.messageText}

                        </div>
                    </div>
                </div>

            )

        } else if (this.props.message.town == Meteor.user().profile.town) {
            return (
                <div className="form-group">
                    <label className="col-md-2 control-label">{this.props.message.username}</label>

                    <div className="col-md-10">
                        <label className="control-label">{this.props.message.town}</label>
                        <div className="well">
                            {this.props.message.messageText}

                        </div>
                    </div>
                </div>
            )
        }

    },
    render() {
        return ( < div className = "messgeItem" > {
            this.props.message
                ? this.getContent()
                : <p>Loading...</p>
        } </div>
        )
    }
})