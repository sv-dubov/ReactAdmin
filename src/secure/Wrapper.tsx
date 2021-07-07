import React, { Component, Dispatch, PropsWithChildren } from 'react';
import Menu from './components/Menu';
import Nav from './components/Nav';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { User } from '../classes/user';
import setUser from '../redux/actions/setUserAction';

class Wrapper extends Component<PropsWithChildren<any>> {
    state = {
        redirect: false
    }
    
    componentDidMount = async () => {
        try {
            const response = await axios.get('user');
            this.props.setUser(response.data.data);
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

const mapStateToProps = (state: { user: User }) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);