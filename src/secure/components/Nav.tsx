import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Nav extends Component {
    state = {
        redirect: false
    };

    handleClick = () => {
        localStorage.clear();
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'} />
        }

        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#" onClick={this.handleClick}>Sign out</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;