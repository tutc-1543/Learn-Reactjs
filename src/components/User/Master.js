import React, { Component } from 'react';
import List from './Body/List';
import Detail from './Body/Detail';

class Master extends Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            data: user,
            showForm: false
        };
    }

    componentDidMount() {
        localStorage.setItem('user', JSON.stringify([{name:'Minhtu1', email: 'minhtu1@gmail.com'}, {name:'minhtu2', email: 'minhtu2@gmail.com'}, {name:'minhtu3', email: 'minhtu3@gmail.com'}]));
    }

    showForm () {
        this.setState({
            showForm: true
        })
    }

    reset () {
        this.setState({
            edit: false,
            name: '',
            email: '',
            showForm: false
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h2>Header</h2>
                </div>
                <div className="row body">
                    <List user={this.state.data} />
                    <Detail showForm={this.state.showForm} clickShowForm={(e) => this.showForm() } reset={() => this.reset()}/>
                </div>
            </div>
        );
    }
}

export default Master;