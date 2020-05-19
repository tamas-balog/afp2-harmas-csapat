import React from "react";
import StaffCRUD from "./StaffCRUD"
import StaffSearchResults from "./StaffResults";

class EmployeesPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    <div className="col-md-4"></div>
                    <div className="col-md-10">
                        <div><h1>EMPLOYEES</h1></div>
                        <div className="row"><StaffCRUD/></div>
                        <div className="row"><StaffSearchResults/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeesPage;