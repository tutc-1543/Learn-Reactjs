import React, { Component } from 'react';

class Detail extends Component {
    constructor (props) {
        super();
        this.state = {
            show: false
        };
    }

    showForm = () => {
        if (this.props.showForm) {
            return (
                <>
                    <form>
                        <div className="form-detail">
                            <div className="form-group">
                                <input name="name" type="name" className="form-control" placeholder="Enter name" id="name" required />
                            </div>
                            <div className="form-group">
                                <input name="email" type="text" className="form-control" placeholder="Enter email" id="email" required />
                            </div>
                        </div>
                        <button type="reset" onClick={(e) => this.props.reset()} className="btn btn-danger mr-4">Cancel</button>
                        <button className="btn btn-primary" > Save </button>
                    </form>
                </>
            );
        } else {
            return (
                <button onClick={(e) => this.props.clickShowForm()} className="btn btn-primary mr-4">Create</button>
            )
        }
    }

    render() {
        return (
            <div className="col-md-6 pt-4">
            <h5>Detail</h5>
            {this.showForm()}
            </div>
        );
    }
}

export default Detail;
