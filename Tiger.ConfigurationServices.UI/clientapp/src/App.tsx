import React, { Component } from 'react';
import { Layout } from './navigation/Layout';
import { Home } from './Home';
import './App.css';
import { Route } from 'react-router';

class App extends Component {
    public render() {
        return (
            <Layout>
                <Route exact path="/" component={Home} />
            </Layout>
        );
    }
}

export default App;
