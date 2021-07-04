/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { Component } from 'react';

class Deleter extends Component<{ id: number, endpoint: string, handleDelete: any}> {
    delete = async () => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            await axios.delete(`${this.props.endpoint}/${this.props.id}`);
            this.props.handleDelete(this.props.id);
        }
    }

    render() {
        return (
            <a className="btn btn-sm btn-outline-secondary"
                onClick={() => this.delete()}
            >Delete</a>

        );
    }
}

export default Deleter;