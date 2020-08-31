/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

console.log('App.js is running');

const template = <p>Hello World, React!!</p>; // eslint-disable-line

ReactDOM.render(template, document.getElementById('app'));
