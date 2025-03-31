import React, { useState, useCallback } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import QnA from './pages/QnA/QnA';
import Auth from './pages/Auth/Auth';
import Thread from './pages/Thread/Thread';

import { AuthContext } from './components/context/auth-context';

import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(undefined);

    const login = useCallback((name, password) => {
        setUser({ name: name, password: password });
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setUser(undefined);
        setIsLoggedIn(false);
    }, []);

    let routes;
    if (isLoggedIn) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/threads" exact>
                    <QnA />
                </Route>
                <Route path="/threads/:threadId" exact>
                    <Thread />
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/threads" exact>
                    <QnA />
                </Route>
                <Route path="/threads/:threadId" exact>
                    <Thread />
                </Route>
                <Route path="/auth" exact>
                    <Auth />
                </Route>
                <Redirect to="/auth" />
            </Switch>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                user: user,
                login: login,
                logout: logout,
            }}
        >
            <Router>
                <MainNavigation />
                <main>{routes}</main>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
