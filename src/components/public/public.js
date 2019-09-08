import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';

function PublicRouter() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact component={Main} />
                <Route path={'/sign-up'} component={SignUp} />
                <Route path={'/sign-in'} component={SignIn} />
                <Route component={Main} />
            </Switch>
        </Router>
    )
}

export default PublicRouter;