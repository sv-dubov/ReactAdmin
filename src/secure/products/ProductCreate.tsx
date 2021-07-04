import axios from 'axios';
import React, { Component, SyntheticEvent } from 'react';
import { Redirect } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';
import Wrapper from '../Wrapper';

class ProductCreate extends Component {
    state = {
        image: '',
        redirect: false
    }

    title = '';
    description = '';
    image = '';
    price = 0;

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('products', {
            title: this.title,
            description: this.description,
            image: this.image,
            price: this.price
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
                        <input type="text" name="title" className="form-control" onChange={e => this.title = e.target.value} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" className="form-control" onChange={e => this.description = e.target.value}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <ImageUpload value={this.image = this.state.image} imageChanged={this.imageCanged} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" name="price" className="form-control" onChange={e => this.price = parseFloat(e.target.value)} />
                    </div>
                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default ProductCreate;