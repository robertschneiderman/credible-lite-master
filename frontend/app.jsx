import React, {Component} from 'react';

import Header from './header';
import Results from './results';

const App = (props) => (
    <div className="app">
        <Header />
        <Results />
        {props.children}
    </div>
);

export default App;