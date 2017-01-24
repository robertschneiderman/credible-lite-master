import React, {Component} from 'react';

import Header from './header';
import Results from './results/components/';

const App = (props) => (
    <div className="app">
        <Header />
        {props.children}
    </div>
);

export default App;