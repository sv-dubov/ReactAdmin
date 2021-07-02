import React, { Component, SyntheticEvent } from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Role } from '../../classes/role';

class UsersCreate extends Component {
    state = {
        roles: [],
        redirect: false
    }

    first_name = '';
    last_name = '';
    email = '';
    role_id = 0;

    componentDidMount = async () => {
        const response = await axios.get('roles');
        this.setState({
            roles: response.data.data
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('users', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            role_id: this.role_id,
        });

        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/users" />
        }

        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="first_name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select className="form-control" name="role_id">
                            {this.state.roles.map((role: Role) => {
                                return (
                                    <option key={role.id} value={role.id}>{role.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default UsersCreate;