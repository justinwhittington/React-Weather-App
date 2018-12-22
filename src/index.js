const React = require('react');
const ReactDom = require('react-dom');
const App = require('./components/app/App');
import './index.css';

 

 ReactDom.render(
     <App />,
     document.getElementById('app')
 )