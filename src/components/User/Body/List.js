import React, { Component } from 'react';

const List = ({user}) => {
    return (
        <div className="col-md-6 body-info pt-4">
            <h5>List</h5>
            <table className="table table-striped table-bordered table-hover mt-2 mb-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((value) => (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List;