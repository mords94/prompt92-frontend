import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Users from "./components/Users/Users";

export const routes = (
    <Layout>
        <Route exact path='/users' component={ Users } />
    </Layout>
);
