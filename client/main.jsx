/* 2017-8-8
 * created by Liam M.
 * */
import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {renderRoutes} from '../imports/startup/routes.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});