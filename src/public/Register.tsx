import React, { Component, SyntheticEvent } from 'react';
import './Public.css';

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    submit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        });
    }

    render() {
        return (
            <main className="form-signin">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please, sign up</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="First name"
                        onChange={e => this.first_name = e.target.value} />
                        <label htmlFor="floatingInput">First name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Last name"
                        onChange={e => this.last_name = e.target.value} />
                        <label htmlFor="floatingInput">Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={e => this.email = e.target.value} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={e => this.password = e.target.value} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password confirm" 
                        onChange={e => this.password_confirm = e.target.value} />
                        <label htmlFor="floatingPassword">Password confirm</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
                </form>
            </main>
        );
    }
}

export default Register;