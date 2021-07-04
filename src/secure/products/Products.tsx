/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../classes/product';
import Wrapper from '../Wrapper';

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount = async () => {
        const response = await axios.get('products');
        this.setState({
            products: response.data.data
        })
    }

    delete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await axios.delete(`products/${id}`);
            this.setState({
                products: this.state.products.filter((p: Product) => p.id !== id)
            })
        }
    }
    
    render() {
        return (
            <Wrapper>
                <div className="pt-3 pb-2 mb-3 border-bottom">
                    <Link to="/products/create" className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map(
                                (product: Product) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td><img src={product.image} width="60" /></td>
                                            <td>{product.title}</td>
                                            <td>{product.description}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <div className="btn-group mr-2">
                                                    <Link to={`/products/${product.id}/edit`}
                                                        className="btn btn-sm btn-outline-secondary">Edit</Link>
                                                    <a className="btn btn-sm btn-outline-secondary"
                                                        onClick={() => this.delete(product.id)}
                                                    >Delete</a>
                                                </div>
                                            </td>
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

export default Products;