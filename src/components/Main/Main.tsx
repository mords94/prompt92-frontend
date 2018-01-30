import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from '../Users/Users';
import NewUser from 'src/components/Users/NewUser';

class Main extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route exact={true} path="/users" component={Users}/>
                    <Route exact={true} path="/users/new" component={NewUser}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
