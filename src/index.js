import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js';

import './styling/reset.css';
import './styling/base.css';
import './styling/tablet-layout.css';
import './styling/desktop-layout.css';
import './styling/modules/dropdown-module.css';
import './styling/modules/button-module.css';
import './styling/modules/scroll-module.css';
import './styling/modules/definition-styles-module.css'

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
