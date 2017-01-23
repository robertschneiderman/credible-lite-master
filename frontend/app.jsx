import React, {Component} from 'react';
import * as actions from '../actions';

const App = ({props}) => (
    <div className="app">
        {props.children}
    </div>
);

export default App;