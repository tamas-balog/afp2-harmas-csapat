import React from 'react';
import Staffstore from "../../../../stores/StaffStore";
import StaffActions from "../../../../actions/StaffActions";

class StaffResults extends React.Component{

    constructor(){
        super();
        this.state = {employees : []};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({employees : Staffstore._staff})
    }

    componentDidMount(){
        Staffstore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        Staffstore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>Position code</td>
                    <td>First name</td>
                    <td>Last name</td>
                    <td>Email</td>
                    <td>Phone number</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.employees.map((employee)=>{
                        return(
                            <tr key={employee.id}>
                                <td>{employee.positionCode}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phoneNumber}</td>
                                <button
                                    className="btn btn-info"
                                    onClick={()=>{
                                        StaffActions.delete(employee.id);
                                        window.location.reload();}
                                    }
                                >Delete
                                </button>

                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}
export default StaffResults;