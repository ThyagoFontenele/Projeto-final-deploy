import React from 'react'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
function routes() {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/register">
                    <Register/>
                </Route>

                <Route exact path="/login">
                    <Login/>
                </Route>
                
                <Route exact path="/404">
                        <NotFound/>
                </Route>

                <Route>
                        <Redirect to="/404"/>
                </Route>

            </Switch>
        </Router>
    )
}

export default routes
