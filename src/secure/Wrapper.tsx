import React, { Component } from 'react';
import Menu from './components/Menu';
import Nav from './components/Nav';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Wrapper extends Component {
    state = {
        redirect: false
    }
    
    componentDidMount = async () => {
        try {
            const response = await axios.get('user');
        console.log(response);
        } catch (e) {
            this.setState({
                redirect: true
            })
        }
        
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'} />
        }
        return (
            <>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

export default Wrapper;