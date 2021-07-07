/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from 'axios';
import { User } from "../../classes/user";
import { Link } from "react-router-dom";
import Paginator from "../components/Paginator";
import Deleter from "../components/Deleter";
import { connect } from "react-redux";

class Users extends Component<{ user: User }> {
    state = {
        users: []
    }

    page = 1;
    last_page = 0;

    componentDidMount = async () => {
        const response = await axios.get(`users?page=${this.page}`);
        this.setState({
            users: response.data.data
        })
        this.last_page = response.data.meta.last_page;
    }

    handleDelete = async (id: number) => {
        this.setState({
            users: this.state.users.filter((u: User) => u.id !== id)
        })
    }

    handlePageChange = async (page: number) => {
        this.page = page;
        await this.componentDidMount();
    }

    actions = (id: number) => {
        if (this.props.user.canEdit('users')) {
            return (
                <div className="btn-group mr-2">
                    <Link to={`/users/${id}/edit`}
                        className="btn btn-sm btn-outline-secondary">Edit</Link>
                    <Deleter id={id} endpoint={'users'} handleDelete={this.handleDelete} />
                </div>
            )
        }
    }

    render() {
        let addButton = null;

        if (this.props.user.canEdit('users')) {
            addButton = (
                <div className="pt-3 pb-2 mb-3 border-bottom">
                    <Link to="/users/create" className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
            );
        }

        return (
            <Wrapper>
                {addButton}
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Actions</th>
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
                                            <td>{this.actions}</td>
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange} />
            </Wrapper>
        )
    }
}

// @ts-ignore
export default connect(state => ({ user: state.user }))(Users);