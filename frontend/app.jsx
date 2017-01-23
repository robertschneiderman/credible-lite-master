import React, {Component} from 'react';

const App = ({props}) => (
    <div className="app">
        {props.children}
    </div>
);

export default App;