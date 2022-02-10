import { hot } from 'react-hot-loader';
import React from 'react';
import Heading from './components/heading/heading.js';


/* 
if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
} */

const App = () => (
  <Heading/>
);

export default hot(module)(App);