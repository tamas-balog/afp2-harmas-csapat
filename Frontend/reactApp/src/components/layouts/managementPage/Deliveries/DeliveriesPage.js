import React from "react";
import DeliveriesResults from "./DeliveriesResults"


class DeliveriesPage extends React.Component {
       render() {
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    <div className="col-md-4"></div>
                    <div className="col-md-10">
                        <div><h1>DELIVERIES</h1></div>
                        <div className="row"><DeliveriesResults/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeliveriesPage;