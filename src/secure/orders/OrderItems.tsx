import axios from 'axios';
import React, { Component } from 'react';
import { Order } from '../../classes/order';
import { OrderItem } from '../../classes/order_item';
import Wrapper from '../Wrapper';

class OrderItems extends Component<{match: any}> {
    state = {
        order_items: []
    }

    id = 0;

    componentDidMount = async () => {
        this.id = this.props.match.params.id;
        const response = await axios.get(`orders/${this.id}`);
        const order: Order = response.data.data;
        this.setState({
            order_items: order.order_items
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
                                <th scope="col">Product title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.order_items.map(
                                (order_item: OrderItem) => {
                                    return (
                                        <tr key={order_item.id}>
                                            <td>{order_item.id}</td>
                                            <td>{order_item.product_title}</td>
                                            <td>{order_item.price}</td>
                                            <td>{order_item.quantity}</td>
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </Wrapper>
        );
    }
}

export default OrderItems;