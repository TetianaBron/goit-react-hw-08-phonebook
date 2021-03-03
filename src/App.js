import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Layout from './components/Layout/Layout';
import PhoneBookPage from './pages/PhoneBookPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => (
    <Layout>
        <AppBar />

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path ="/login" component={LoginPage} />
            <Route path="/phonebook" component={PhoneBookPage} />
        </Switch>
    </Layout>
)

export default App;
