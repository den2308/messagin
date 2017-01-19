import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

MainLayout = React.createClass({
    render() {
        return (
            <div className="container">
                <MessageList />
            </div>
        )
    }
});
