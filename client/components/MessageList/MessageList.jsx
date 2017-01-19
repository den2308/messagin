import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';
import {Message} from '../../../both/collections/message/Message.js'

Meteor.subscribe('message');
MessageList = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        let user = Meteor.user();
        if (user) {
            return {
                message: Message.find({
                    
                },{sort: {createdAt:1,town:1}}).fetch()
            }
        }else{
            return{
               message: Message.find({}).fetch() 
            }
        }

    },
    render() {
        return (
            <div className="container">
                <MessageInsertField/> {this
                    .data
                    .message
                    .map((message) => <MessageItem message={message}/>)}

            </div>
        )
    }
});