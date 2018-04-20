import React, { Component } from 'react';
import ProductList from "../ProductList";
import axios from 'axios';

var url = "https://api.dwp.io/virtualhr/search_by_division_id/M-01.json?auth_token=0fb7b9a571145c01c79f272c57d09041";

class Users extends Component {
    state = {
        users: []
    };
    
    componentDidMount() {
        axios.get(url)
        .then(res => {
            const usersData = (res.data.employees);
            console.log(res.data);
            this.setState({ users:usersData });
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                <div class="card-status bg-blue"></div>
                    <div className="card-header">
                        <h3 className="card-title">Users</h3>
                    </div>

                    <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap">
                      <thead>
                        <tr>
                            <th className="w-1">No.</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>No Hp</th>
                            <th>Divisi</th>
                            <th></th>
                        </tr>
                      </thead>
                      
                      <tbody>
                          { this.state.users.map((user,index) =>
                                <tr key={index}>
                                    <td><span className="text-muted">{index+1}</span></td>
                                    <td><a href="#" className="text-inherit">{ user.nama}</a></td>
                                    <td>
                                        { user.email }
                                    </td>
                                    <td>
                                        {user.gsm}
                                    </td>
                                    <td>
                                        <b>{user.positions[0].divisi}</b>
                                    </td>
                                    
                                    <td>
                                        <a className="icon" href="javascript:void(0)">
                                        <i className="fe fe-edit"></i>
                                        </a>
                                    </td>
                                </tr>
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
        );
    }
}

export default Users;