import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from 'axios';
import { User } from "../../classes/user";
import { Link } from "react-router-dom";

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount = async () => {
        const response = await axios.get('users');
        this.setState({
            users: response.data.data
        })
    }

    render() {
        return (
            <Wrapper>
                <div className="pt-3 pb-2 mb-3 border-bottom">
                    <Link to="/users/create" className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(
                                (user: User) => {
                                    return (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.first_name} {user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role.name}</td>
                                            <div className="btn-group mr-2">
                                                <Link to={`/users/${user.id}/edit`}
                                                    className="btn btn-sm btn-outline-secondary">Edit</Link>
                                                <a href="#" className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => del(user.id)}
                                                >Delete</a>
                                            </div>
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </Wrapper>
        )
    }
}

export default Users;