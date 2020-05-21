import React from "react";
import PreparationsResults from "./PreparationsResults";

class DeliveriesPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    <div className="col-md-4"></div>
                    <div className="col-md-10">
                        <div><h1>PREPARATIONS</h1></div>
                        <div className="row"><PreparationsResults/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeliveriesPage;