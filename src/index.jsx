import React from 'react';
import { render } from 'react-dom';

import 'reset-css/reset.css';

import App from 'modules/app';

const renderRoot = () => <App />;

render(renderRoot(), document.getElementById('root'));
