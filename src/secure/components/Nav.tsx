import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { User } from "../../classes/user";

class Nav extends Component {
    state = {
        user: new User(),
        redirect: false
    }

    componentDidMount = async () => {
        const response = await axios.get('user');

        this.setState({
            user: response.data.data
        })
    }

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

                <ul className="my-2 my-md-0 mr-md-3">
                    {/* <Link to={'/profile'}
                        className="p-2 text-white text-decoration-none">{this.state.user.first_name} {this.state.user.last_name}</Link> */}
                    <a className="p-2 text-white text-decoration-none" href="#" onClick={this.handleClick}>Sign out</a>
                </ul>
            </nav>
        )
    }
}

export default Nav;