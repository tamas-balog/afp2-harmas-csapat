import React from 'react';
import StaffActions from '../../../../actions/StaffActions'

class StaffCRUD extends React.Component{
    constructor(){
        super();
        this.state={
            positionCode : "",
            firstName : "",
            lastName : "",
            email : "",
            phoneNumber : "",
            password : ""
        }
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td><input type={"number"} placeholder="Position code" min={"1"} max={"3"}
                                   value={this.state.positionCode}
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.positionCode = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td><input type={"text"} placeholder="First name"
                                   value={this.state.firstName}
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.firstName = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td><input type={"text"}
                                   value={this.state.lastName} placeholder="Last name"
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.lastName = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td><input type={"email"} placeholder="Email"
                                   value={this.state.email}
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.email = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td><input type={"text"} placeholder="phoneNumber"
                                   value={this.state.phoneNumber}
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.phoneNumber = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td><input type={"password"} placeholder="Password"
                                   value={this.state.password}
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.password = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td
                            colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={()=>{StaffActions.search(this.state.firstName)
                                }}
                            >Search
                            </button>
                            <button
                                className="btn btn-info"
                                onClick={()=>{StaffActions.register(
                                    this.state.positionCode,
                                    this.state.firstName,
                                    this.state.lastName,
                                    this.state.email,
                                    this.state.phoneNumber,
                                    this.state.password
                                );window.location.reload();}}
                            >Register
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default StaffCRUD;