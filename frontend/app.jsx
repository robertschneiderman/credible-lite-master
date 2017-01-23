import React, {Component} from 'react';
import Header from './header';

const App = (props) => (
    <div className="app">
        <Header />
        {props.children}
    </div>
);

export default App;