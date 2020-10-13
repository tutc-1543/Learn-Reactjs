import React, { Component } from 'react'
import './App.css';
import Master from './components/User/Master';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <Master />
            </div>
        );
    }
}

export default App;