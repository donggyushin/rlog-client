import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main';

function PrivateRouter() {
    return <Router>
        <Switch>
            <Route path={'/'} component={Main} />
            <Route component={Main} />
        </Switch>
    </Router>
}

export default PrivateRouter