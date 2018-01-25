import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from '../Users/Users';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact={true} path="/users" component={Users}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
