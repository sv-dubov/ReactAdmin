import React, { Component, SyntheticEvent } from 'react';
import './Public.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    email = '';
    password = '';
    state = {
        redirect: false
    };
    
    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post('login', {
            email: this.email,
            password: this.password
        });

        localStorage.setItem('token', response.data.token);

        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/'} />
        }
        return (
            <main className="form-signin">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please, sign in</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="Email"
                        onChange={e => this.email = e.target.value} />
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password"
                        onChange={e => this.password = e.target.value} />
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
                </form>
            </main>
        )
    }
}

export default Login;