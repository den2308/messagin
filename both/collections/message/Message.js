import { Mongo } from 'meteor/mongo';

export const Message = new Mongo.Collection('message');
if (Meteor.isServer) {
    Meteor.publish('message', function messagePublication() {
        return Message.find();
    });
}
Message.attachSchema(new SimpleSchema({
    createdAt: {
        type: Date,
        label: "Date",
        optional: true
    },
    messageText: {
        type: String,
        label: "messageTest",
        optional: true
    },
    userID: {
        type: String,
        label: "UserID",
        optional: true
    },
    town: {
        type: String,
        label: "town",
        optional: true
    },
    username: {
        type: String,
        optional: true
    }
}));
Meteor.users.allow({
    'update': function(userId) {
        return true;
    }
});