import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.route('/', {
  action() {
    if (!Meteor.user()) {
      FlowRouter.go("/login");
    } else {
      mount(MainLayout, {});
    }
  }
});
FlowRouter.route('/login', {
  action() {
    mount(Login, {});
  }
});
FlowRouter.route('/signup', {
  action() {
    mount(Signup, {});
  }
});
FlowRouter.route('/profile', {
  action() {
    mount(Profile, {});
  }
});
