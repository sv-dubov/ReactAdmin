import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from 'axios';
import { User } from "../../classes/user";

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
                                            <td></td>
                                            <td></td>
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