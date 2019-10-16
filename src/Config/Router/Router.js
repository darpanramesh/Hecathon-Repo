import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, SignUp,Home, Verify } from '../../Container/index'


export default class BasicRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/Sign-Up" component={SignUp} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/verify-email" component={Verify} />
            </Router>
        )
    }
}