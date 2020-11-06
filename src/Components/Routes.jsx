import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwitchRoute from './Pages/SwitchRoute';

const Routes = () => (
    <Router>
        <Switch>
            <Route path = "/" component = { SwitchRoute } />
            <Route path = "/author" component = { SwitchRoute } />
        </Switch>
    </Router>
);
export default Routes;