import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Layout from './components/Layout/Layout';
import PhoneBookPage from './pages/PhoneBookPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import authOperations from './redux/auth/auth-operations';
import authActions from './redux/auth/auth-actions';



class App extends Component {
      static propTypes = {
        onGetCurrentUser: PropTypes.func,
      };
    
    componentDidMount() {
        this.props.onGetCurrentUser();
    }
    render() {
        return (
            <Layout>
                <AppBar />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/contacts" component={PhoneBookPage} />
                </Switch>
            </Layout>
        );
    };
};

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);


