import axios from 'axios';
import React, { Component, SyntheticEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { Product } from '../../classes/product';
import ImageUpload from '../components/ImageUpload';
import Wrapper from '../Wrapper';

class ProductEdit extends Component<{ match: any }> {
    state = {
        title: '',
        description: '',
        image: '',
        price: 0,
        redirect: false
    }

    id = 0;
    title = '';
    description = '';
    image = '';
    price = 0;

    componentDidMount = async () => {
        this.id = this.props.match.params.id;
        const response = await axios.get(`products/${this.id}`);
        const product: Product = response.data.data;
        this.setState({
            title: product.title,
            description: product.description,
            image: product.image,
            price: product.price,
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`products/${this.id}`, {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
        });

        this.setState({
            redirect: true
        })
    }

    imageCanged = (image: string) => {
        this.image = image;
        this.setState({
            image: this.image
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/products'} />;
        }

        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control"
                            defaultValue={this.state.title}
                            onChange={e => this.setState({title: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" className="form-control"
                            defaultValue={this.state.description}
                            onChange={e => this.setState({description: e.target.value})}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <ImageUpload value={this.image = this.state.image} imageChanged={this.imageCanged} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" name="price" className="form-control"
                            value={this.price = this.state.price}
                            onChange={e => this.setState({price: e.target.value})}
                        />
                    </div>
                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default ProductEdit;