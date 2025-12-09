import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';

//ReactDOM.render(<App />, document.getElementById('app'));

const root = createRoot(document.getElementById('app'));
root.render(<App />) 