/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Order } from '../../classes/order';
import Paginator from '../components/Paginator';
import Wrapper from '../Wrapper';

class Orders extends Component {
    state = {
        orders: []
    }

    page = 1;
    last_page = 0;

    componentDidMount = async () => {
        const response = await axios.get(`orders?page=${this.page}`);
        this.setState({
            orders: response.data.data
        })
        this.last_page = response.data.meta.last_page;
    }

    handlePageChange = async (page: number) => {
        this.page = page;
        await this.componentDidMount();
    }

    handleExport = async () => {
        const response = await axios.get('export', {responseType: 'blob'});
        const blob = new Blob([response.data], {type: 'text/csv'});
        const dowloadUrl = window.URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = dowloadUrl;
        link.download = 'orders.csv';
        link.click();
    }

    render() {
        return (
            <Wrapper>
                <div className="pt-3 pb-2 mb-3 border-bottom">
                    <a onClick={this.handleExport} className="btn btn-sm btn-outline-secondary">Export CSV</a>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Total</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map(
                                (order: Order) => {
                                    return (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.first_name} {order.last_name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.total}</td>
                                            <div className="btn-group mr-2">
                                                <Link to={`/orders/${order.id}`}
                                                    className="btn btn-sm btn-outline-secondary">View</Link>
                                            </div>
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange} />
            </Wrapper>
        );
    }
}

export default Orders;